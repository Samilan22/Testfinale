import { Item } from '../models/oggetto';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';

@Injectable()
export class objectService {
    oggetto: Item[] = [];

    constructor(){

        this.oggetto = [
            {
            cosa: 'Penna',
            chi: 'Paolo',
            quando: '18/12/17', 
            },
            {
            cosa: 'Matita',
            chi: 'Luca',
            quando: '18/12/17'
            },
            {
            cosa: 'Libro',
            chi: 'Chiara',
            quando: '18/12/17'
            },
            {
            cosa: 'Quaderno',
            chi: 'Alessia',
            quando: '18/12/17'
            }
            ];
        
    }
    getOggetto(): Observable<Item[]> {
            return of(this.oggetto);
    }
    setOggetto(item){
        this.oggetto.push(item);
    }
} 