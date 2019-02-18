/**
 * Created by pzc on 16-4-17.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'theme-switcher',
  template: `
    <div>
    <span (click)="switcher('blue')" class="blue"></span>
    <span (click)="switcher('red')" class="red"></span>
    <span (click)="switcher('green')" class="green"></span>
    <span (click)="switcher('yellow')" class="yellow"></span>
    <span (click)="switcher('teal')" class="teal"></span>
    </div>
`,
  styles: [`
  span{
    cursor: pointer;
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 50%;
    margin-right: 4px;
    box-shadow: 2px 2px 2px rgba(0,0,0,.1);
  }
  .blue{
    background-color: #2196F3;
   }
   .red{
   background-color: #f44336;
   }
   .yellow{
   background-color: #ff9800;
   }
   .green{
   background-color: #4CAF50;
   }
   .teal{
   background-color: #009688;
   }
  `]
})
export class Theme {
  switcher(color) {
    console.log(color)
    document.querySelector('body').className = color;
  }
}