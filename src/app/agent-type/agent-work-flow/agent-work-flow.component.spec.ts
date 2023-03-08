import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentWorkFlowComponent } from './agent-work-flow.component';

describe('AgentWorkFlowComponent', () => {
  let component: AgentWorkFlowComponent;
  let fixture: ComponentFixture<AgentWorkFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentWorkFlowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentWorkFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
