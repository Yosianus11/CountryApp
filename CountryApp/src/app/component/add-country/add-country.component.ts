import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Country } from 'src/app/models/country';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {
  @Output() newCountry = new EventEmitter<Country>();

  Icountry: string="";
  Icountry_code :number=0;
  Iiso_code: string="";
  Ipopulation :number=0;
  Iarea:number=0;
  IGDP: number=0;
  Iimage:string='';
  

  addCountry(){
    const country:Country ={
      country: this.Icountry,
      country_code : this.Icountry_code,
      iso_code: this.Iiso_code,
      population :this.Ipopulation,
      area:this.Iarea,
      GDP: this.IGDP,
      image:this.Iimage
    }
    this.newCountry.emit(country)
    this.Icountry = "";
    this.Icountry_code =0;
    this.Iiso_code="",
    this.Ipopulation=0,
    this.Iarea=0,
    this.IGDP=0,
    this.Iimage=""
  }
  constructor() { }

  ngOnInit(): void {
  }

}
