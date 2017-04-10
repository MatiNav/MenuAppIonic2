import { Chips } from './../chips/chips';
import { Component } from '@angular/core';

import { NavController, ActionSheetController  } from 'ionic-angular';

@Component({
  selector: 'page-actionSheetPage',
  templateUrl: 'actionSheetPage.html'
})
export class ActionSheetPage {

  constructor(public navCtrl: NavController, public actionSheet: ActionSheetController) {
      
  }
   
  mostrarActionSheet() {
   let actSht = this.actionSheet.create({
     title: 'Modify your album',
     buttons: [
       {
         text: 'Mostrar Chips',
         role: 'destructive',
         handler: () => {
           this.navCtrl.push(Chips);
         }
       },
       {
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   });

   actSht.present();
 }


}
