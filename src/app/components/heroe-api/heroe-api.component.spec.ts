import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeApiComponent } from './heroe-api.component';

describe('HeroeApiComponent', () => {
  let component: HeroeApiComponent;
  let fixture: ComponentFixture<HeroeApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroeApiComponent]
    });
    fixture = TestBed.createComponent(HeroeApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
