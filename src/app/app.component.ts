import { Component, Directive, ElementRef, TemplateRef, ViewContainerRef, Input } from '@angular/core';

// Component is a Directive with a template
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'Angular5 Exercise';
   dogGif = 'https://media.giphy.com/media/1LweXxLwVT0J2/giphy.gif';
   dogGifAlt = 'Golden Retriever';
}

// Attribute Directive - Change the behavior of a component but don't affect the template
@Directive({
   selector: '[uppercase]'
})
export class UpperCaseDirective {
   constructor(private el: ElementRef) {
      el.nativeElement.style.textTransform = 'uppercase';
   }
}


// Structural Directive - Change the behavior by changing how the template is rendered
@Directive({
   selector:"[ifnot]"
})
export class IfNotDirective {
   private hasView:boolean = false;

   constructor(private tempRef: TemplateRef<any>,
               private viewContainer: ViewContainerRef){}

   @Input() set ifnot(condition: boolean){
      if (!condition && !this.hasView) {
         this.viewContainer.createEmbeddedView(this.tempRef);
         this.hasView = true;
      } else if (condition && this.hasView) {
         this.viewContainer.clear();
         this.hasView = false;
      }
   }
}