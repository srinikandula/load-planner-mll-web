import { Component, OnInit } from '@angular/core';

declare var jQuery: any

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (($) => {
      // () => {

      const showNavbar = (toggleId: any, navId: any, bodyId: any, headerId: any) => {
        const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId),
          bodypd = document.getElementById(bodyId),
          headerpd = document.getElementById(headerId)

        // Validate that all variables exist
        if(toggle && nav && bodypd && headerpd){
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
          })
        }
      }
      showNavbar('header-toggle','nav-bar','body-pd','header')

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
}
