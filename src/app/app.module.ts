import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ContentComponent } from './content/content.component';
import { ButtonModule } from 'primeng/primeng';
import { ServiceModule } from './service/service.module';
import { InputTextModule } from 'primeng/primeng';
import { OrganizationChartModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    ServiceModule,
    InputTextModule,
    OrganizationChartModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
