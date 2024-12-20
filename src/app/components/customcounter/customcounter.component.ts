import {Component, OnInit, inject} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {Store} from "@ngrx/store";
import * as CounterActions from "../../shared/store/counter/counter.actions";
import {FormsModule} from "@angular/forms";
import {MatOption, MatSelect} from "@angular/material/select";
import { Subscription } from 'rxjs';
import { getChannelName } from '../../shared/store/counter/counter.selector';
import { AppStateModel } from '../../shared/store/global/app-state.model';

@Component({
  selector: 'app-customcounter',
  standalone: true,
  imports: [
    MatCard,
    MatFormField,
    MatInput,
    MatLabel,
    MatButton,
    MatCardContent,
    FormsModule,
    MatSelect,
    MatOption
  ],
  templateUrl: './customcounter.component.html',
  styleUrl: './customcounter.component.css'
})
export class CustomcounterComponent implements OnInit{
  private store = inject(Store<AppStateModel>)
  counterInput!: number;
  actionType = 'add';
  channelName= '';
  counterSubscribe!: Subscription;

  ngOnInit(): void {
    this.counterSubscribe = this.store.select(getChannelName).subscribe(data => {
      this.channelName = data;
      console.log('custom counter');
    });
  }

  onIncrement() {
    this.store.dispatch(CounterActions.customIncrement({value: +this.counterInput, action: this.actionType}))
  }
}
