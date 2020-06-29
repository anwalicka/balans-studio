import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  @Input() styleClass: string;
  constructor() { }

  ngOnInit(): void {
  }

}
