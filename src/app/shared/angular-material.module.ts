import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, MatRippleModule, MatStepperModule, MatSelectModule, MatRadioModule, MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
    exports: [
      BrowserAnimationsModule,
      NoopAnimationsModule,
      MatInputModule,
      MatDatepickerModule,
      MatFormFieldModule,
      MatNativeDateModule,
      MatRippleModule,
      MatButtonModule,
      MatCheckboxModule,
      MatSnackBarModule,
      MatStepperModule,
      MatSelectModule,
      MatRadioModule,
      MatCardModule
    ],
    declarations: []
  })
  export class AngularMaterialModule { }
