import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {ApiUrls} from "../../../schemas/apiUrls";
import {AuthenticationService} from "../../../services/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";
import {first, map, share} from "rxjs/operators";
import {Subscription, timer} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  image: any;
  returnUrl = '';
  subscription: Subscription;
  setClockTime = new Date();
  get f() {
    return this.loginForm.controls;
  }
  constructor(private _httpClient: HttpClient, public _apiUrls: ApiUrls, private _authenticationService: AuthenticationService, private fb: FormBuilder,private route: ActivatedRoute,
              private router: Router,) {
    // if (this._authenticationService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }
  }


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
    console.log('45', this.loginForm );
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/'

    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        this.setClockTime = time;
      });
  }


  onSubmit(): void{
    this._authenticationService.logIn(this.f.username.value, this.f.password.value).subscribe( (data: any) => {
      this.router.navigate([this.returnUrl]);
      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
      });
      Toast.fire({icon: 'success', title: 'Login in successfully'});
    });
  }

  signup(): void{
    this.router.navigate(['signup'])
  }

}
