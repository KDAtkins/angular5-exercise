import { Component } from '@angular/core';

@Component({
  selector: 'dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent {
   dog1 = {name: 'Odie', color: 'Gold'};
   // dog2 = {name: 'Bane', color: 'Black'};
   // dog3 = {name: 'Daisy', color: 'Brown'};
   // dog4 = {name: 'Bane', color: 'Black'};

   doBark(name: string) {
      console.log(name + ' has barked.');
   }

   changeDog1(name) {
      this.dog1.name = name;
   }

   private dogs :any[] = [{
      'name': 'Timmy',
      'color': 'White',
      'leash': true
   }, {
      'name': 'Kelly',
      'color': 'White',
      'leash': true
   }, {
      'name': 'Bane',
      'color': 'Black',
      'leash': false
   }, {
      'name': 'Loki',
      'color': 'Black',
      'leash': false
   }];

   // changeDog2(name) {
   //    this.dog2.name = name;
   // }
   //
   // changeDog3(name) {
   //    this.dog3.name = name;
   // }
   //
   // changeDog4(name) {
   //    this.dog4.name = name;
   // }
}
