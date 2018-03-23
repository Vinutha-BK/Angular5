import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../angular-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar.component';
import { SearchService } from './search-service';

@NgModule({
    declarations: [
      SearchBarComponent
    ],
    imports: [
        AngularMaterialModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    providers: [
        SearchService,
    ],
    exports: [SearchBarComponent]
})
export class SearchBarModule {}
