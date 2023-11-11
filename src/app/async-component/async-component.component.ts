import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-async-component',
  templateUrl: './async-component.component.html',
  styleUrls: ['./async-component.component.scss']
})
export class AsyncComponent implements OnInit {
  private asyncLog = new Subject();

  constructor() {
    console.log(`%casync-component constructor`, `color: orange`);
  }
  
  ngOnInit(): void {
    this.asyncLog.subscribe(res => {
      console.log(`%cAsync msg: ${res}`, 'color: orange')
    })

    this.asyncLog.next('placeholder msg');
  }
}
