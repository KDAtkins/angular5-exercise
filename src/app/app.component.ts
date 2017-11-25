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
   dog1 = {name: 'Daisy', color: 'Brown'};
   dog2 = {name: 'Bane', color: 'Black'};

   doBark(name:string){
      console.log(name + ' has barked.');
   }

   changeDog1(name) {
      this.dog1.name = name;
   }
}
