import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Item } from '../../models/oggetto';
import { NativeStorage } from '@ionic-native/native-storage';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'azioni.html',
})

export class ActionPage {
    oggetto: Item;
  
    constructor(public navCtrl: NavController, public navParams: NavParams, private nativeStorage: NativeStorage, private camera: Camera){
        this.oggetto = new Item();
    }




    ionViewDidLoad(){
        /*
        this.nativeStorage.getItem('segnaoggetti').then(
          (item) => this.oggetto = item,
          (error) => console.log('errore')
        );
        */
    }

    aggiungiOggetto(){
        alert("oggetto aggiunto");
        this.nativeStorage.setItem('oggetto', {cosa: '', chi: '', quando: ''})
    .then(
    () => console.log('Stored item!'),
    error => console.error('Error storing item', error)
  );

        this.nativeStorage.getItem('oggetto')
    .then(
    data => console.log(data),
    error => console.error(error)
  );
            
    }
}