import { Component, ViewChild } from '@angular/core';

import { NavController, Navbar, Platform } from 'ionic-angular';

@Component({
  selector: 'page-chips',
  templateUrl: 'chips.html'
})
export class Chips {

  @ViewChild(Navbar) navBar: Navbar;

  constructor(public navCtrl: NavController, public platform: Platform) {
    
  }

  ionViewWillEnter() {

    if (this.platform.is('ios')) {
        this.navBar.setBackButtonText("Action Sheet Page");
      }
  }

   mostrarOpciones(){

   }

}
