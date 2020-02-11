import {NgModule} from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
const materialComponents = [ MatSliderModule,MatCardModule,MatStepperModule,MatFormFieldModule,MatInputModule,MatDatepickerModule,MatIconModule,MatNativeDateModule,MatRadioModule,MatSelectModule,MatGridListModule,MatButtonModule,ScrollingModule,MatTableModule,MatDialogModule];
@NgModule ({
  imports: [materialComponents],
  exports:[materialComponents],
  providers: [MatDatepickerModule],
})
export class MaterialModule {}