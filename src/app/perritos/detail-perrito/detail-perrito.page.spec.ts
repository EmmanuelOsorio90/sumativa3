import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DetailPerritoPage } from './detail-perrito.page';

describe('DetailPerritoPage', () => {
  let component: DetailPerritoPage;
  let fixture: ComponentFixture<DetailPerritoPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [DetailPerritoPage],
      imports: [HttpClientModule],
      providers: [HttpClient],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailPerritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});