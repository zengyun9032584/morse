import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ServiceModule } from '../service/service.module';
import { ContentComponent } from './content.component';
import { ButtonModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { OrganizationChartModule } from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: ContentComponent,
            }
        ]),
        ServiceModule,
        ButtonModule,
        InputTextModule,
        OrganizationChartModule
    ],
    declarations: [
        ContentComponent
    ],
})
export class ContentModule {

}
