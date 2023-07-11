import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AddPerritoPage } from './add-perrito.page';

describe('AddPerritoPage', () => {
  let component: AddPerritoPage;
  let fixture: ComponentFixture<AddPerritoPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [AddPerritoPage],
      imports: [HttpClientModule],
      providers: [HttpClient],
    }).compileComponents();

    fixture = TestBed.createComponent(AddPerritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

