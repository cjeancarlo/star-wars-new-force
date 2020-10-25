import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTabsModule} from '@angular/material/tabs';

import { ShipsComponent } from 'src/app/components/ships/ships.component';
import { ShipCardComponent } from 'src/app/components/ship-card/ship-card.component';
import { ShipInfoDetailComponent } from 'src/app/components/ship-info-detail/ship-info-detail.component';
import { ShowMessageComponent } from 'src/app/components/show-message/show-message.component';
import { ToolBarComponent } from 'src/app/components/tool-bar/tool-bar.component';


const COREMODULE: any[] = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  FlexLayoutModule,
];


const MATERIAL: any[] = [
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatNativeDateModule,
  MatSelectModule,
  MatDialogModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatStepperModule,
  MatCardModule,
  MatChipsModule,
  MatRippleModule,
  MatExpansionModule,
  MatBadgeModule,
  MatCheckboxModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatIconModule,
  MatExpansionModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatTabsModule

];

const COMPONENTES: any[] = [
  ShipsComponent,
  ShipCardComponent,
  ShipInfoDetailComponent,
  ShowMessageComponent,
  ToolBarComponent
];

@NgModule({
  declarations: [COMPONENTES],
  exports: [MATERIAL, COMPONENTES , COREMODULE],
  imports: [COREMODULE, MATERIAL]
})
export class ShareModule { }
