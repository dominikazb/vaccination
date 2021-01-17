import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'vaccination';

  mediaSubscription: Subscription;
  deviceXs: boolean;
  deviceSm: boolean;
  deviceMd: boolean;
  deviceLg: boolean;

  constructor(public mediaObserver: MediaObserver){}
  ngOnInit() {
    this.mediaSubscription = this.mediaObserver.media$.subscribe((result:MediaChange) => {
      console.log(result.mqAlias);
      this.deviceXs = result.mqAlias === 'xs' ? true : false;
      this.deviceMd = result.mqAlias === 'md' ? true : false;
      this.deviceMd = result.mqAlias === 'lg' ? true : false;
      this.deviceSm = result.mqAlias === 'sm' ? true : false;
    });
  }
  ngOnDestroy(){
    this.mediaSubscription.unsubscribe();
  }
}
