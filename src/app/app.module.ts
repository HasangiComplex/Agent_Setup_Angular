import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgentTypeComponent } from './agent-type/agent-type.component';

import { AgentProfileComponent } from './agent-type/agent-profile/agent-profile.component';
import { AgentWorkFlowComponent } from './agent-type/agent-work-flow/agent-work-flow.component';
import { RulesComponent } from './agent-type/rules/rules.component';


@NgModule({
  declarations: [
    AppComponent,
    AgentTypeComponent,
    AgentProfileComponent,
    AgentWorkFlowComponent,
    RulesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
