import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprodutorComponent } from './reprodutor.component';

describe('ReprodutorComponent', () => {
  let component: ReprodutorComponent;
  let fixture: ComponentFixture<ReprodutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReprodutorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReprodutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
