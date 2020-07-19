import { BillPage } from './../bill/bill';
import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';

import { DateFormatPipe } from 'angular2-moment';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  pipes : [DateFormatPipe]

})
export class HomePage {

  billList : AngularFireList<any> ;

  constructor(public navCtrl: NavController, 
    public afDatabase: AngularFireDatabase, public alertCtrl: AlertController) {

    this.billList = afDatabase.list ( '/bills' ).valueChanges();

  }

  newBill(){

    this.navCtrl.push("BillPage");
  }

  promptPayment(billId: string) {
    let alert = this.alertCtrl.create({
      message: "Mark as paid?",
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Mark as Paid',
          handler: data => {
            this.billList.update(billId, { paid: true });
          }
        }
      ]
    });
    alert.present();
  }

}
