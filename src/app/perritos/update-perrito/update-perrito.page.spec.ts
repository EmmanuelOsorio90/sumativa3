import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UpdatePerritoPage } from './update-perrito.page';

describe('UpdatePerritoPage', () => {
  let component: UpdatePerritoPage;
  let fixture: ComponentFixture<UpdatePerritoPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePerritoPage],
      imports: [HttpClientModule],
      providers: [HttpClient],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatePerritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
