import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { Country } from 'src/app/models/country';

@Component({
  selector: 'app-all-country',
  templateUrl: './all-country.component.html',
  styleUrls: ['./all-country.component.css']
})
export class AllCountryComponent implements OnInit {

  @Input() menus:string|number ='';

  @Output() changeMenu: EventEmitter<number> = new EventEmitter();

  @Input() countries:Country[] = [];

  @Input() homes:number|string=""

  @Output() detailCountry: EventEmitter<number> = new EventEmitter()

  selectCountry = ""

  sdetailCountry (e: string, r:number) {
    this.selectCountry=e;
    this.menus=r;
  }
  
  changeSubmenus(e: number, r : number) {
    this.menus = e
    this.homes = r
  }

  changeMenus (e: number, r : number ) {
    this.menus= e
    this.homes=r
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
