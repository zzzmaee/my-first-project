import { Component } from '@angular/core';
import {CounterbuttonComponent} from "../counterbutton/counterbutton.component";
import {CounterdisplayComponent} from "../counterdisplay/counterdisplay.component";
import {CustomcounterComponent} from "../customcounter/customcounter.component";
import {NavigateComponent} from "../navigate/navigate.component";

@Component({
  selector: 'app-counter',
  standalone: true,
    imports: [
        CounterbuttonComponent,
        CounterdisplayComponent,
        CustomcounterComponent,
        NavigateComponent
    ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

}
