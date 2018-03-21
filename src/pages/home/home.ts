import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/oggetto';
import { ActionPage } from '../azioni/azioni';
import { NativeStorage } from '@ionic-native/native-storage';
import { objectService } from '../../serviziooggetti/objectservice';

@Component({
  selector: 'page-home', 
  templateUrl: 'home.html'
})
export class HomePage {

  prestato = false;

  
  oggetti: Item[];
 

  constructor(public navCtrl: NavController, 
              private nativeStorage: NativeStorage,
              private objectService: objectService) {

                this.oggetti = [];
  }

  itemSelected(item){
    this.navCtrl.push(ActionPage, {
    Item: item
    })
  }
  ionViewDidLoad(){
    this.objectService.getOggetto().subscribe(oggetto => this.oggetti = oggetto);
  }

  changeStatus(oggetto: Item): void{
    if (oggetto.itemStatus === 'secondary'){
      oggetto.itemStatus = 'danger';
    } else {
      oggetto.itemStatus = 'secondary'
    }
  }

  removeItem(oggetto){
    let index = this.oggetti.indexOf(oggetto);

    if(index > -1){
      this.oggetti.splice(index, 1);
    }
  }
    
}
