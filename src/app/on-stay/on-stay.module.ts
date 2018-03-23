import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { RouterModule } from '@angular/router';
import { NgModule, OnInit } from '@angular/core';
import { QRCodeModule } from 'angular2-qrcode';
import { CommonModule } from '@angular/common';
import { StayServiceComponent } from './stay-service/stay-service.component';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { CheckOutComponent } from './check-out/check-out.component';

@NgModule({
    declarations: [
      WelcomeMessageComponent,
      StayServiceComponent,
      CheckOutComponent
    ],
    imports: [QRCodeModule,
        CommonModule,
        AngularMaterialModule,
        RouterModule.forChild([
          { path: 'onstay', component: WelcomeMessageComponent, pathMatch: 'full' },
          { path: 'stayservice', component: StayServiceComponent, pathMatch: 'full' },
          { path: 'checkout', component: CheckOutComponent, pathMatch: 'full' }
        ])
    ]
})
export class OnStayModule {}
