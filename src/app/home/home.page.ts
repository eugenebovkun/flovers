import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('canvas', { static: false }) canvas: ElementRef;
  @ViewChild('svg', { static: false }) svg: ElementRef;

  constructor() {

  }

  public drawOnCanvas() {
    const drawing = this.canvas.nativeElement.getContext('2d');
    drawing.fillRect(10, 10, 20, 20);
    drawing.fillRect(50, 10, 20, 20);
    drawing.fillRect(10, 50, 20, 20);
    drawing.fillRect(30, 30, 20, 20);
    drawing.fillRect(50, 50, 20, 20);
  }

  public drawOnSVG() {}

}
