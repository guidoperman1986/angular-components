import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioghaphyComponent } from './bioghaphy.component';

describe('BioghaphyComponent', () => {
  let component: BioghaphyComponent;
  let fixture: ComponentFixture<BioghaphyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioghaphyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioghaphyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
