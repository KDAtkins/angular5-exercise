import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
   selector: 'dog-details',
   templateUrl: './dog-details.component.html'
   // template: ' <h2>{{ name }} - {{ color }} </h2>' +
   // '<input (input) = "handleNameChange($event)" type="text" placeholder="Name"/>' +
   // '<input (input) = "handleColorChange($event)" type="text" placeholder="Color"/>' +
   // '<button class="btn btn-waves" (click) = "handleClick()">Bark</button>'
})

export class DogDetailsComponent {
   @Input() name: string;
   @Input() color: string;

   @Output() bark = new EventEmitter<{}>();
   @Output() nameChange = new EventEmitter<string>();
   @Output() colorChange = new EventEmitter<string>();

   colorStyles = {
      color: this.goGreen(),
      fontSize: '2em'
   };
   goGreen() {
      return 'teal';
   }
   handleClick() {
      this.bark.emit({});
   }

   handleNameChange(e) {
      this.nameChange.emit(e.target.value);
   }

   handleColorChange(e) {
      this.colorChange.emit(e.target.value);
   }
}
