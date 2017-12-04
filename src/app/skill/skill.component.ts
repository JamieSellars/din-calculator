import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatRadioButton } from '@angular/material';
import { DINSettingModel } from '../models/dinSettingModel';


@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Output() selected: EventEmitter<string> = new EventEmitter<string>();

  skills: DINSettingModel[] = [
    { description: 'Cautious', value: 'cautious', index: 0 },
    { description: 'Average / Moderate', value: 'moderate', index: 1 },
    { description: 'Aggressive', value: 'aggressive', index: 2 }
  ];

  constructor() { }

  ngOnInit() {
  }

  onUpdate($event: MatRadioButton){
    this.selected.emit($event.value);
  }


}
