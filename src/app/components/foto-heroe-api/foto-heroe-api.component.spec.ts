import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoHeroeApiComponent } from './foto-heroe-api.component';

describe('FotoHeroeApiComponent', () => {
  let component: FotoHeroeApiComponent;
  let fixture: ComponentFixture<FotoHeroeApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FotoHeroeApiComponent]
    });
    fixture = TestBed.createComponent(FotoHeroeApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
