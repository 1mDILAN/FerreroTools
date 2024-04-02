import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesFotosComponent } from './heroes-fotos.component';

describe('HeroesFotosComponent', () => {
  let component: HeroesFotosComponent;
  let fixture: ComponentFixture<HeroesFotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesFotosComponent]
    });
    fixture = TestBed.createComponent(HeroesFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
