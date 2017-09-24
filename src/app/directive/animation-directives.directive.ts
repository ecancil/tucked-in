import {Directive, HostListener, HostBinding, ElementRef, Renderer2, Input, OnChanges, DoCheck, ViewChild} from '@angular/core';
import {AnimationBuilder, style, animate, state, transition} from "@angular/animations";

const EXPANSION_PANEL_ANIMATION_TIMING = '275ms cubic-bezier(0.4,0.0,0.2,1)';

@Directive({
  selector: '[collapse]'
})

export class Collapse implements OnChanges, DoCheck{



   constructor(private el: ElementRef, private renderer: Renderer2, private _builder: AnimationBuilder) {
		// Use renderer to render the element with styles
		//renderer.setStyle(el.nativeElement, 'display', 'none');
	}

   originalHeight: any;


	@Input() collapse:any;


   ngDoCheck() {
      if(this.collapse){
         console.log(this.el.nativeElement.scrollHeight)
         this.originalHeight =  this.el.nativeElement.scrollHeight
      }else{
         console.log(this.el.nativeElement.scrollHeight)
         var tmp = this.el.nativeElement.scrollHeight;
         if(tmp > this.originalHeight){
            let myAnimation = this._builder.build([
               style({'overflow': 'hidden'}),
               animate(EXPANSION_PANEL_ANIMATION_TIMING, style({height: tmp + "px"}))
            ]);
            const player = myAnimation.create(this.el.nativeElement);
            player.play();
         }
         this.originalHeight =  this.el.nativeElement.scrollHeight
      }
   }

	ngOnChanges(changes){
	      console.log(changes);
			if(changes!.collapse){
				//if(changes.collapse.currentValue){
					let myAnimation;
					if(changes.collapse.currentValue){
					   console.log(this.el.nativeElement)
					   this.originalHeight = this.el.nativeElement.clientHeight;
                  myAnimation = this._builder.build([
                     style({ height:  '*', 'overflow' : 'hidden', opacity : 1 }),
                     animate(EXPANSION_PANEL_ANIMATION_TIMING, style({ height:  '0px', opacity : 0 }))
                  ]);
               }else{
					   if(this.originalHeight) {
                     myAnimation = this._builder.build([
                        style({'overflow': 'hidden', opacity : 0}),
                        animate(EXPANSION_PANEL_ANIMATION_TIMING, style({height: this.originalHeight + "px", opacity : 1}))
                     ]);
                  }
               }

               if(myAnimation) {
                  // then create a player from it
                  const player = myAnimation.create(this.el.nativeElement);

                  player.onDone(() => {
                     console.log("asdfdsafdsa")
                  });

                  player.play();
               }

				//}
		}
	}

}
