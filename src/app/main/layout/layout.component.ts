import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

declare var jQuery: any

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  currentUser: any = {}

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x;
    });
  }

  ngOnInit(): void {
    (($) => {
      // () => {

      const showNavbar = (toggleId: any, navId: any, bodyId: any, headerId: any, containerCusId: any) => {
        const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId),
          bodypd = document.getElementById(bodyId),
          headerpd = document.getElementById(headerId),
          containerpd = document.getElementById(containerCusId)

        // Validate that all variables exist
        if(toggle && nav && bodypd && headerpd && containerpd){
        // if(toggle && nav && headerpd){
          toggle.addEventListener('click', ()=>{
            // show navbar
            nav.classList.toggle('show')
            // change icon
            toggle.classList.toggle('bx-x')
            // add padding to body
            bodypd.classList.toggle('body-pd')
            // add padding to header
            headerpd.classList.toggle('body-pd-head')
            containerpd.classList.toggle('container-cus-show')
          })
        }
      }
      showNavbar('header-toggle','nav-bar','body-pd','header', 'containerCus')

      /*===== LINK ACTIVE =====*/
      const linkColor = document.querySelectorAll('.nav_link')

      function colorLink(){
        if(linkColor){
          linkColor.forEach(l=> l.classList.remove('active'))
          // @ts-ignore
          this.classList.add('active')
        }
      }
      linkColor.forEach(l=> l.addEventListener('click', colorLink))

      // Your code to run since DOM is loaded and ready
      // }

    })(jQuery)
  }

  logOutUser(): void {
    this.authenticationService.logOut();
    window.location.reload();
    this.router.navigate(['/logIn']);
  }
}
