import { BillPage } from './../pages/bill/bill';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BillPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({

    apiKey: "AIzaSyCR7aF9mlJhiaLt7o9t7t_HhJV_W8Tz0Sc",
    authDomain: "fir-test-11387.firebaseapp.com",
    databaseURL: "https://fir-test-11387.firebaseio.com",
    projectId: "fir-test-11387",
    storageBucket: "fir-test-11387.appspot.com",
    messagingSenderId: "786619724017",
    appId: "1:786619724017:web:ee37bb593abb4824087950",
    measurementId: "G-YYXLYRVQ99"

    }),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BillPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
