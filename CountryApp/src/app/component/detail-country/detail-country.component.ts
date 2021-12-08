import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { Country } from 'src/app/models/country';


@Component({
  selector: 'app-detail-country',
  templateUrl: './detail-country.component.html',
  styleUrls: ['./detail-country.component.css']
})
export class DetailCountryComponent implements OnInit {

  @Input() selectedCountry = '';
  @Input() countries:Country[] = [];
  @Input() menus:number|string='';
  @Input() homes: number|string = '';
  @Output() changeSubMenu: EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  changeSubMenus (e: number, r : number) {
    console.log("detail:"+this.menus)
    console.log("detail:"+this.homes)
    this.changeSubMenu.emit(e)
    this.changeSubMenu.emit(r)
  }

}
