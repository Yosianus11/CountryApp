import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Country } from 'src/app/models/country';
import { AllCountryComponent } from './all-country.component';

describe('AllCountryComponent', () => {
  let component: AllCountryComponent;
  let fixture: ComponentFixture<AllCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
