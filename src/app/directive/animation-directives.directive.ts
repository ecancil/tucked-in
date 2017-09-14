import {Directive, HostListener, HostBinding, ElementRef, Renderer2, Input, OnChanges} from '@angular/core';
import {AnimationBuilder, style, animate} from "@angular/animations";

@Directive({
  selector: '[collapse]'
})
export class Collapse implements OnChanges{


	constructor(private el: ElementRef, private renderer: Renderer2, private _builder: AnimationBuilder) {
		// Use renderer to render the element with styles
		//renderer.setStyle(el.nativeElement, 'display', 'none');
	}

	@Input() collapse:any;

	ngOnChanges(changes){
			if(changes!.collapse){
				if(changes.collapse.currentValue){
					const myAnimation = this._builder.build([
						style({ opacity: 1 }),
						animate(1000, style({ opacity: 0 }))
					]);

					// then create a player from it
					const player = myAnimation.create(this.el.nativeElement);

					player.onDone(() => {
							console.log("asdfdsafdsa")
					});

					player.play();

					console.log(player);
				}else{

				}
		}
	}

}
