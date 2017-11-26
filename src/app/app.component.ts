import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'Angular5 Exercise';
   dogGif = 'https://media.giphy.com/media/1LweXxLwVT0J2/giphy.gif';
   dogGifAlt = 'Golden Retriever';
   dog1 = {name: 'Odie', color: 'Gold'};
   dog2 = {name: 'Bane', color: 'Black'};
   dog3 = {name: 'Daisy', color: 'Brown'};
   dog4 = {name: 'Bane', color: 'Black'};

   doBark(name: string) {
      console.log(name + ' has barked.');
   }

   changeDog1(name) {
      this.dog1.name = name;
   }

   changeDog2(name) {
      this.dog2.name = name;
   }

   changeDog3(name) {
      this.dog3.name = name;
   }

   changeDog4(name) {
      this.dog4.name = name;
   }
}
