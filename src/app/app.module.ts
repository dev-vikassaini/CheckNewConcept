import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ReactiveFormSampleComponent } from './reactive-form-sample/reactive-form-sample.component';
import { TemplateDrivenFormsSampleComponent } from './template-driven-forms-sample/template-driven-forms-sample.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnPushSampleComponent } from './on-push-sample/on-push-sample.component';
import { Angular13NewFutureComponent } from './angular13-new-future/angular13-new-future.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChildComponent,
    ParentComponent,
    ReactiveFormSampleComponent,
    TemplateDrivenFormsSampleComponent,
    HomeComponent,
    PageNotFoundComponent,
    OnPushSampleComponent,
    Angular13NewFutureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
