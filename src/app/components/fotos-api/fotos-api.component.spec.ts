import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosApiComponent } from './fotos-api.component';

describe('FotosApiComponent', () => {
  let component: FotosApiComponent;
  let fixture: ComponentFixture<FotosApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FotosApiComponent]
    });
    fixture = TestBed.createComponent(FotosApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
