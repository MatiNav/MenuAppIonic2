import { Deivid } from './../pages/Deivid/Deivid';
import { SegmentedControl } from './../pages/segmentedControl/segmentedControl';
import { SearchBar } from './../pages/searchBar/searchBar';
import { Options } from './../pages/options/options';
import { Chips } from './../pages/chips/chips';
import { ActionSheetPage } from './../pages/actionSheetPage/actionSheetPage';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
      

    });

    this.pages = [
      { title: 'ActionSheetPage', component: ActionSheetPage },
      { title: 'SegmentedControl', component: SegmentedControl },
    ];

    

  }

  openPage(page){
    this.nav.setRoot(page.component);
  }

}
