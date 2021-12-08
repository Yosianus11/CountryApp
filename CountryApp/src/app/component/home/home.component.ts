import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';
import {Country} from 'src/app/models/country';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  countries: Country[] = [];

  population: Country[] = [];

  area: Country[] = [];

  GDP: Country[] = [];

  constructor() { }

  ngOnInit(): void {
    this.countries = [
      {
        country: 'Afghanistan',
        country_code: 93,
        iso_code: "AF / AFG",
        population: 29121286,
        area: 647500,
        GDP: 2065,
        image: "https://www.orfonline.org/wp-content/uploads/2017/10/kabul.jpg"
      },
      {
        country: 'Belgium',
        country_code: 32,
        iso_code: "BE / BEL",
        population: 10403000,
        area: 30510,
        GDP: 5074,
        image: "https://www.planetware.com/wpimages/2020/02/belgium-in-pictures-beautiful-places-to-photograph-Sint-Michielsbrug-Bridge.jpg"
      },
      {
        country: 'Australia',
        country_code: 61,
        iso_code: "AU / AUS",
        population: 21515754,
        area: 7686480,
        GDP: 1488,
        image: "https://img.idxchannel.com/media/700/images/idx/2021/10/04/australia.jpg"
      },
      {
        country: 'Canada',
        country_code: 1,
        iso_code: "	CA / CAN",
        population: 33679000,
        area: 9984670,
        GDP: 1825,
        image: "https://www.commonwealthfund.org/sites/default/files/styles/countries_hero_desktop/public/country_image_Canada.jpg?h=f2fcf546&itok=HpXJ6X1n"
      },
      {
        country: 'France',
        country_code: 33,
        iso_code: "FR / FRA",
        population: 64768389,
        area: 547030,
        GDP: 2739,
        image: "https://europa.eu/europass/sites/default/files/2020-04/France_0.jpg"
      },
      {
        country: 'Libya',
        country_code:218,
        iso_code: "LY / LBY",
        population: 6461454,
        area: 1759540,
        GDP: 7092,
        image: "https://www.fairobserver.com/wp-content/uploads/2021/07/Libya-news-1.jpg"
      }
    ]

    this.GDP = this.countries;
    this.GDP.sort((a, b) => {
      if(a.GDP> b.GDP) {
        return -1;
      } else if(a.GDP > b.GDP) {
        return 1;
      } else {
        return 0;
      }
    });

    this.population = [ ...this.countries ]
    
    this.population.sort((a, b) => {
      if(a.population> b.population) {
        return -1;
      } else if(a.population > b.population) {
        return 1;
      } else {
        return 0;
      }
    });

    this.area = [ ...this.countries ]
    this.area.sort((a, b) => {
      if(a.area> b.area) {
        return -1;
      } else if(a.area > b.area) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  
  
  @Output() changeMenu: EventEmitter<number> = new EventEmitter()
  
  @Input() menus:number|string=""
  @Input() homes:number|string=""

  changeMenus (e: number, r :number){
    this.changeMenu.emit(this.menus=e)
    this.changeMenu.emit(this.homes=r)
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

  selectCountry = ""

  sdetailCountry (e: string, r:number) {
    this.selectCountry=e;
    this.menus=r;
  }

  addCountry(Countrie :Country){
    this.countries.push(Countrie);
  }

}
