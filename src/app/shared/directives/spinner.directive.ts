import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[spinner]'
})
export class SpinnerDirective implements AfterViewInit {

  @Input() spinner: string;
  constructor(private element: ElementRef) { }

  ngAfterViewInit() {
  	this.element.nativeElement.style.display = 'none';
  	console.log('Spinner data: ', this.spinner);
  }
}
