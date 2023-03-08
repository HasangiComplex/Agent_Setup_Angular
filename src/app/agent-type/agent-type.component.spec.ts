import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentTypeComponent } from './agent-type.component';

describe('AgentTypeComponent', () => {
  let component: AgentTypeComponent;
  let fixture: ComponentFixture<AgentTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
