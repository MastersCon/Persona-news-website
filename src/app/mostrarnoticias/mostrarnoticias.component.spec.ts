import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarnoticiasComponent } from './mostrarnoticias.component';

describe('MostrarnoticiasComponent', () => {
  let component: MostrarnoticiasComponent;
  let fixture: ComponentFixture<MostrarnoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarnoticiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarnoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
