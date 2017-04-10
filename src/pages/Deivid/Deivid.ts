import { Component, ViewChild } from '@angular/core';

import { NavController, Navbar, Platform } from 'ionic-angular';

@Component({
  selector: 'page-deivid',
  templateUrl: 'deivid.html'
})
export class Deivid {

  @ViewChild(Navbar) navBar: Navbar;

  constructor(public navCtrl: NavController, public platform: Platform) {
    
  }

  ionViewWillEnter() {

    if (this.platform.is('ios')) {
        this.navBar.setBackButtonText("Sal De La Pagina 'Deivid'");
      }
  }

   mostrarOpciones(){

   }

}