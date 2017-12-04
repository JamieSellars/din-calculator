import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, 
  MatRadioModule,
  MatCheckboxModule, 
  MatDialogModule,
  MatMenuModule,
  MatCardModule,
  MatOptionModule,
  MatInputModule,
  MatAutocompleteModule,
  MatIconModule,
  MatTabsModule,
  MatListModule,
  MatSelectModule,
  MatToolbarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSliderModule,
  MatGridListModule,
  MatRippleModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatExpansionPanel,
  MatAccordion,
  MatButtonToggleModule,
  MatChipsModule,
  MatExpansionModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTooltipModule,
  MatStepperModule
} from '@angular/material';

const MATERIAL_MODULES = [    
MatAutocompleteModule,
MatButtonModule,
MatButtonToggleModule,
MatCardModule,
MatCheckboxModule,
MatChipsModule,
MatDatepickerModule,
MatDialogModule,
MatExpansionModule,
MatGridListModule,
MatIconModule,
MatInputModule,
MatListModule,
MatMenuModule,
MatNativeDateModule,
MatPaginatorModule,
MatProgressBarModule,
MatProgressSpinnerModule,
MatRadioModule,
MatRippleModule,
MatSelectModule,
MatSidenavModule,
MatSliderModule,
MatSlideToggleModule,
MatSnackBarModule,
MatSortModule,
MatTableModule,
MatTabsModule,
MatToolbarModule,
MatTooltipModule,
MatStepperModule,
];

@NgModule({
  imports: [
    MATERIAL_MODULES
  ],
  exports: [
    MATERIAL_MODULES
  ],
  declarations: []
})
export class MaterialDesignModule { }
