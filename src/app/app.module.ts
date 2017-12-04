import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MaterialDesignModule } from './material/material-design.module';
import { SkillComponent } from './skill/skill.component';
import { AgeComponent } from './age/age.component';
import { WeightComponent } from './weight/weight.component';
import { HeightComponent } from './height/height.component';
import { SolelengthComponent } from './solelength/solelength.component';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ResultComponent } from './result/result.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ResultDialogComponent } from './result-dialog/result-dialog.component';
import { DinCalculatorService } from './services/din-calculator.service';

@NgModule({
  declarations: [
    AppComponent,
    SkillComponent,
    AgeComponent,
    WeightComponent,
    HeightComponent,
    SolelengthComponent,
    ResultComponent,
    ResultDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    MaterialDesignModule
  ],
  entryComponents: [ResultDialogComponent],
  providers: [DinCalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
