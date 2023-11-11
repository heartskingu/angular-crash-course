import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SimpleComponent } from './simple-component/simple-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  isRenderingComponent = true;
  displaying = 1;

  @ViewChild(SimpleComponent) simpleComponent?: SimpleComponent;

  ngAfterViewInit(): void {
    console.log(`%csimpleComponent name: ${this.simpleComponent?.name}`, 'color: red')
  }

  destroyComponent(): void {
    this.isRenderingComponent = !this.isRenderingComponent;
  }

  display(example: number): void {
    this.displaying = example;
  }
}
