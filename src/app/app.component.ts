import { Component, ViewChild } from '@angular/core';
import { SkillComponent } from './skill/skill.component';
import { DINSetting } from './models/dinSetting';
import { ResultComponent } from './result/result.component';
import { DINSettingModel } from './models/dinSettingModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  @ViewChild('results') results: ResultComponent;

  din: DINSetting = new DINSetting();

  onSkillUpdate(skill: DINSettingModel){
    this.din.skill = skill;
  }
  onAgeUpdate(age: DINSettingModel){
    this.din.age = age;
  }
  onWeightUpdate(weight: DINSettingModel){
    this.din.weight = weight;
  }
  onHeightUpdate(height: DINSettingModel){
    this.din.height = height;
  }
  onSoleLengthUpdate(soleLength: DINSettingModel){
    this.din.soleLength = soleLength;
  }

  calculateDINSetting(){
    this.results.calculateDIN(this.din);
  }

  
}
