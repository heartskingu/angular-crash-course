import { Component, EventEmitter, Host, Input, OnDestroy, OnInit, Optional, Output } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-simple-component',
  templateUrl: './simple-component.component.html',
  styleUrls: ['./simple-component.component.scss']
})
export class SimpleComponent implements OnInit, OnDestroy {
  @Input() initialName = '';
  @Input() color = 'white'
  @Output() selfDestroyAction = new EventEmitter<void>();

  name = '';
  appComponent?: AppComponent;

  constructor(@Optional() @Host() appComponent: AppComponent) {
    console.log(`%csimple-component constructor: ${this.name}`, `color: ${this.color}`);
    this.appComponent = appComponent;
  }

  ngOnInit(): void {
    this.name = this.initialName;
    if (this.appComponent) {
      console.log(`%cappComponent.isRenderingComponent: ${this.appComponent.isRenderingComponent}`, `color: ${this.color}`)
    }
    console.log(`%cngOnInit: ${this.name}`, `color: ${this.color}`);
  }

  ngOnDestroy(): void {
    console.log(`%cngOnDestroy: ${this.name}`, `color: ${this.color}`);
  }

  selfDestroy(): void {
    this.selfDestroyAction.emit();
  }
}
