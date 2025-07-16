import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChillComponents } from './chill-components';

describe('ChillComponents', () => {
  let component: ChillComponents;
  let fixture: ComponentFixture<ChillComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChillComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChillComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
