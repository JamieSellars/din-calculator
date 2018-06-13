import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatRadioButton } from '@angular/material';
import { DINSettingModel } from '../models/dinSettingModel';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.scss']
})
export class AgeComponent implements OnInit {

  @Output() selected: EventEmitter<string> = new EventEmitter<string>();
  
  ages: DINSettingModel[] = [
    { description: '9 and Under', value: '9 and Under', index: 0 },
    { description: '10 - 50 Years', value: '10 - 50 Years', index: 1 },
    { description: 'Over 50 Years', value: 'Over 50 Years', index: 2 }
  ];

  constructor() { }

  ngOnInit() {
  }

  onUpdate($event: MatRadioButton){
    this.selected.emit($event.value);
  }

}
