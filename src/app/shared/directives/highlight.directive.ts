import { Directive, ElementRef, HostListener, OnChanges, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[highlightCard]'
})
export class HighlightDirective {


    constructor(private elementRef: ElementRef,
                private renderer: Renderer2) {
    }

    @HostListener('mouseenter')
    onMouseEnter() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'red');
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    }
  
    @HostListener('mouseleave')
    onMouseLeave() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'transparent');
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
    }
}