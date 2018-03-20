import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Item } from '../../models/oggetto';
import { NativeStorage } from '@ionic-native/native-storage';


@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'azioni.html',
})

export class ActionPage {
    items: Item [] = [] ;
    constructor(public navCtrl: NavController, public navParams: NavParams, private nativeStorage: NativeStorage){
    }

    ionViewDidLoad(){
        this.nativeStorage.getItem('segnaoggetti').then(
          (item) => this.items = item,
          (error) => console.log('errore')
        );
      }

    aggiungiOggetto(){
        alert("oggetto aggiunto");
        const item: Item = {
            cosa: 'Libro',
            chi: 'Paolo',
            quando: '18/12/17',
            foto: ''
        }
        this.items.push(item);
        this.nativeStorage.setItem('segnaoggetti', this.items)
            .then(
                 () => console.log('oggetto aggiunto'),
                error => console.log('errore nell aggiunta')
            );
    }
}