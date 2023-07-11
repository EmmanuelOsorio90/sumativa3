import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ApiexternaPage } from './apiexterna.page';

describe('ApiexternaPage', () => {
  let component: ApiexternaPage;
  let fixture: ComponentFixture<ApiexternaPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ApiexternaPage],
      imports: [HttpClientModule],
      providers: [HttpClient],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiexternaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
