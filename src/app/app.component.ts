import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { state, style, trigger, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `
  <p [@myAnimationTrigger]='animationStatus' (click)="animateMe()">
    I will animate
  </p>
  `,
  styles: [`
    p {
      width: 200px;
      background: lightgray;
      margin: 100px auto;
      text-align: center;
      padding:20px;
      font-size:1.5em;
    }
  `],
  animations: [
    trigger('myAnimationTrigger', [
      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(1.5)',
        background: 'red'
      })),
      transition('small <=> large', animate('1500ms ease-in', keyframes([
        style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
        style({ opacity: 1, transform: 'translateY(35%)', offset: .5 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
      ])))
    ])
  ]
})
export class AppComponent implements OnInit {

  title = 'angular-ecom';
  animationStatus: string = 'small';
  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
  }

  animateMe() {
    this.animationStatus = (this.animationStatus === 'small' ? 'large' : 'small');
  }

}
