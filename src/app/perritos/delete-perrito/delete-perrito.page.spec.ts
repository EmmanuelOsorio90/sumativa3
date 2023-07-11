import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DeletePerritoPage } from './delete-perrito.page';

describe('DeletePerritoPage', () => {
  let component: DeletePerritoPage;
  let fixture: ComponentFixture<DeletePerritoPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [DeletePerritoPage],
      imports: [HttpClientModule],
      providers: [HttpClient],
    }).compileComponents();

    fixture = TestBed.createComponent(DeletePerritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});