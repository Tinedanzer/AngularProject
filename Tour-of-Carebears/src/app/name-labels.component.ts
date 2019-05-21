import{Component} from '@angular/core';
import { NamesService } from './name-labels.service';

@Component({
    selector: 'names',
    template: `<h2>{{"Names of Carebears: " + getList() }}</h2>
            <ul >
                <li *ngFor='let x of carebears'>
                {{ x }}
                </li>
            </ul>`
})
export class NameComponent{
    objBear={
        veww:'aroo',
        title:['Grumpy Bear', 'aroo', 'pew pew'].join('™ ▬ ')
    }
    carebears;
// important for scaling to pass modifiable code in this constructor in a services(providers) file
// (like name-labels.services.ts);  HUGE FOR Scalabity when you need to reuse functions and/or DATA!
    constructor(service: NamesService){
        this.carebears=service.getNames();
    }
    getList(){
        return this.objBear.title;
    }
}