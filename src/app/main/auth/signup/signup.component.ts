import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ApiUrls} from "../../../schemas/apiUrls";
import {AuthenticationService} from "../../../services/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiServiceService} from "../../../services/api-service.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  image: any;
  signUpForm:FormGroup;

  constructor(private _httpClient: HttpClient,
              public _apiUrls: ApiUrls,
              private _authenticationService:AuthenticationService,
              private _apiServiceService:ApiServiceService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      fullname: new FormControl(null, [Validators.required]),
      emailId: new FormControl(null, [Validators.required]),
      companyName: new FormControl(null, [Validators.required]),
      customer: new FormControl(null, [Validators.required]),
    });
  }

  userRegister(): void {
    this._apiServiceService.create(this._apiUrls.userRegistration, this.signUpForm.value).subscribe((res: any) => {
      if (res){
        Swal.fire('Success', 'User Registered Successfully..!', 'success');
        this.router.navigate(['logIn']);
      }

    })
  }

}
