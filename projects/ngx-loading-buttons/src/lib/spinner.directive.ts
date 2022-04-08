import { ElementRef, OnInit } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[spinner]'
})
export class SpinnerDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    let css = `
      @keyframes spinner {
        to {transform: rotate(360deg);}
      }
      
      .spinner:before {
        content: '';
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 20px;
        margin-top: -10px;
        margin-left: -10px;
        border-radius: 50%;
        border: 2px solid #ffffff;
        border-top-color: #000000;
        animation: spinner .8s linear infinite;
      }
    `;
    this.elementRef.nativeElement.setAttribute("style", css);
  }

}
