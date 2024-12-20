import {Component, inject} from '@angular/core';
import {Store} from "@ngrx/store";
import * as CounterActions from '../../shared/store/counter/counter.actions'
import {MatButton} from "@angular/material/button";
import { AppStateModel } from '../../shared/store/global/app-state.model';

@Component({
  selector: 'app-counterbutton',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './counterbutton.component.html',
  styleUrl: './counterbutton.component.css'
})
export class CounterbuttonComponent {
  private store = inject(Store<AppStateModel>);

  onIncrement() {
    this.store.dispatch(CounterActions.increment())
  }

  onDecrement() {
    this.store.dispatch(CounterActions.decrement())
  }

  onReset() {
    this.store.dispatch(CounterActions.reset())
  }

  onRename() {
    this.store.dispatch(CounterActions.changeChannelName({channel: 'WELCOME TO ZZZMAEE'}))
  }
}
