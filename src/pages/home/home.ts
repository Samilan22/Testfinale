import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Item } from '../../models/oggetto';
import { ActionPage } from '../azioni/azioni';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    items: Item[];
    
  constructor(public navCtrl: NavController, 
              private nativeStorage: NativeStorage) {

  }
  itemSelected(item){
    this.navCtrl.push(ActionPage, {
     item: item 
    })
  }

}
