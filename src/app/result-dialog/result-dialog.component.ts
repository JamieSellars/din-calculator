import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-result-dialog',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.scss']
})
export class ResultDialogComponent implements OnInit {

  constructor(
    private _matDialogRef: MatDialogRef<ResultDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any    
  ) { }

  ngOnInit() {
  } 

}
