import { Component, ViewChild } from '@angular/core';
import { SkillComponent } from './skill/skill.component';
import { DINSetting } from './models/dinSetting';
import { ResultComponent } from './result/result.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  @ViewChild('results') results: ResultComponent;

  din: DINSetting = new DINSetting();

  onSkillUpdate(skill: string){
    this.din.skill = skill;
  }
  onAgeUpdate(age: string){
    this.din.age = age;
  }
  onWeightUpdate(weight: string){
    this.din.weight = weight;
  }
  onHeightUpdate(height: string){
    this.din.height = height;
  }
  onSoleLengthUpdate(soleLength: string){
    this.din.soleLength = soleLength;
  }

  calculateDINSetting(){
    this.results.calculateDIN(this.din);
  }

  
}
