import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  @Input() styleClass: string;
  public navList = [
    {routerLink: '/main', name: "Strona główna" },
    {routerLink: '/about-me', name: "O mnie" },
    {routerLink: '', name: "Warsztaty pięknego ciała" },
    {routerLink: '', name: "Warsztaty stania na rękach" },
    {routerLink: '', name: "Warsztaty akrobatyki" },
    {routerLink: '', name: "Kontakt" },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
