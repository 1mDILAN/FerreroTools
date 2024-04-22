import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeindividualComponent } from './heroeindividual.component';

describe('HeroeindividualComponent', () => {
  let component: HeroeindividualComponent;
  let fixture: ComponentFixture<HeroeindividualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroeindividualComponent]
    });
    fixture = TestBed.createComponent(HeroeindividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
