import{Component} from '@angular/core';

@Component({
    selector: 'names',
    template: `<h2>{{"Names of Carebears: " + getList() }}</h2>
            <ul *ngFor='let x of carebears'>
                {{ x }}
            </ul>`

})
export class NameComponent{
    // objBear={
    //     1:'aroo'
    // }
    title=['Grumpy Bear', 'aroo', 'pew pew'].join('™ ▬ ');
    carebears=['Grumpy Bear', 'sunshine bear']
    getList(){
        return this.title;
    }
}