import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActionPage } from './azioni';
import { NativeStorage } from '@ionic-native/native-storage';


@NgModule({
    declarations: [
      ActionPage,
    ],
    imports: [
        IonicPageModule.forChild(ActionPage),
      ],
    })

    export class ActionPageModule {}