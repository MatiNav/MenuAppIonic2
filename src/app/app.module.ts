import { Deivid } from './../pages/Deivid/Deivid';
import { SegmentedControl } from './../pages/segmentedControl/segmentedControl';
import { SearchBar } from './../pages/searchBar/searchBar';
import { Options } from './../pages/options/options';
import { DateTime } from './../pages/dateTime/dateTime';
import { Chips } from './../pages/chips/chips';
import { ActionSheetPage } from './../pages/actionSheetPage/actionSheetPage';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActionSheetPage,
    Chips,
    Options,
    SearchBar,
    SegmentedControl,
    Deivid
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    ActionSheetPage,
    Chips,
    Options,
    SearchBar,
    SegmentedControl,
    Deivid
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
