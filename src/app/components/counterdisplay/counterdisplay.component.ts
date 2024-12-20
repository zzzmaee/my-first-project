import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { getCounter } from '../../shared/store/counter/counter.selector';
import { AppStateModel } from '../../shared/store/global/app-state.model';

@Component({
  selector: 'app-counterdisplay',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './counterdisplay.component.html',
  styleUrl: './counterdisplay.component.css'
})
export class CounterdisplayComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    if (this.counterSubscribe) {
      this.counterSubscribe.unsubscribe();
    }
  }

  private store = inject(Store<AppStateModel>);
  counterDisplay!: number;
  // channelName = ' ';
  counterSubscribe!: Subscription;
  // counter$!: Observable<CounterModel>;

  ngOnInit() {
    this.counterSubscribe = this.store.select(getCounter).subscribe(data => {
      this.counterDisplay = data;
      console.log('display counter');
    });
    // this.counter$ = this.store.select('counter');
  }
}
