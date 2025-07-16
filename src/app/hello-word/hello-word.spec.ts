import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWord } from './hello-word';

describe('HelloWord', () => {
  let component: HelloWord;
  let fixture: ComponentFixture<HelloWord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloWord]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloWord);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
