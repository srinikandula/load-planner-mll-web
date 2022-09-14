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
      $(document).ready( () => {
        const treeviewMenu = $('.app-menu');
        const treeviewMenuChild = $('.app-menu-child');
// @ts-ignore
        // Activate sidebar treeview toggle
        $('[data-toggle=\'treeview\']').click(function(event) {
          event.preventDefault();
          // @ts-ignore
          if (!$(this).parent().hasClass('is-expanded')) {
            treeviewMenu.find('[data-toggle=\'treeview\']').parent().removeClass('is-expanded');
          }
          // @ts-ignore
          $(this).parent().toggleClass('is-expanded');
        });
// @ts-ignore
        $('[data-toggle=\'treeview-child\']').click(function(event) {
          event.preventDefault();
          // @ts-ignore
          if (!$(this).parent().hasClass('is-expanded')) {
            treeviewMenuChild.find('[data-toggle=\'treeview-child\']').parent().removeClass('is-expanded');
          }
          // @ts-ignore
          $(this).parent().toggleClass('is-expanded');
        });

        // Set initial active toggle
        $('[data-toggle=\'treeview.\'].is-expanded').parent().toggleClass('is-expanded');

        $('[data-toggle=\'treeview-child.\'].is-expanded').parent().toggleClass('is-expanded');

      });
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
            nav.classList.toggle('show-nav')
            // change icon
            // toggle.classList.toggle('bx-x')
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
          linkColor.forEach(l => {
            l.classList.remove('active')
          })
          // @ts-ignore
          this.classList.add('active')
        }
      }
      linkColor.forEach(l=> l.addEventListener('click', colorLink))

      // Your code to run since DOM is loaded and ready
      // }
      $("#globalSearch").keyup(function() {
        // @ts-ignore
        if ($(this).val().length) {
          // @ts-ignore
          $(this).next('.globalSearchPlaceholder').hide();
        } else {
          // @ts-ignore
          $(this).next('.globalSearchPlaceholder').show();
        }
      });
      $(".globalSearchPlaceholder").click(function() {
        // @ts-ignore
        $(this).prev().focus();
      });
    })(jQuery);
  }

  logOutUser(): void {
    this.authenticationService.logOut();
    window.location.reload();
    this.router.navigate(['/logIn']);
  }
}
