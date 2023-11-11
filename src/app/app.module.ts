import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsyncComponent } from './async-component/async-component.component';
import { CardModule } from './shared/components/card/card.module';
import { ToUppercasePipe } from './shared/pipes/to-uppercase.pipe';
import { SimpleComponent } from './simple-component/simple-component.component';
import { TemplateComponent } from './template-component/template-component.component';
import { FormSampleModule } from './form-sample/form-sample.module';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    ToUppercasePipe,
    AsyncComponent,
    TemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CardModule,
    FormSampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
