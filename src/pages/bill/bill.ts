import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';


/**
 * Generated class for the BillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bill',
  templateUrl: 'bill.html',
  
})
export class BillPage {

  name:any;
  amount:any;
  dueDate:any;

  billList: AngularFireList<any>;

  constructor(public navCtrl: NavController, 
    public afDatabase: AngularFireDatabase) {

      this.billList = afDatabase.list ( '/bills' );
  }


  createBill(name, amount, dueDate) {
    const newBillRef = this.billList.push({});
  
    newBillRef.set({
      name: name,
      amount: amount,
      dueDate: dueDate,
      paid: false,
      id: newBillRef.key
    }).then( newBill => {
      this.navCtrl.pop();
    }, error => {
      console.log(error);
    });
  }


}
