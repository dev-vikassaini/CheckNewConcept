import { Angular13NewFutureComponent } from './angular13-new-future/angular13-new-future.component';
import { NgModule } from '@angular/core';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OnPushSampleComponent } from './on-push-sample/on-push-sample.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormSampleComponent } from './reactive-form-sample/reactive-form-sample.component';
import { StandaloneComponent } from './standalone/standalone.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'Standalone', component: StandaloneComponent, title: 'Standalone' },
  { path: 'TypedForms', component: ReactiveFormSampleComponent, title: 'Typed Forms' },
  { path: 'OnPush', component: OnPushSampleComponent, title: 'OnPush' },
  { path: 'Angular13NewFuture', component: Angular13NewFutureComponent, title: 'Angular 13 New Future' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule extends TitleStrategy {
  updateTitle(snapshot: RouterStateSnapshot): void {
    const pageTitle = this.buildTitle(snapshot);
    if (pageTitle != undefined) {
      document.title = "${pageTitle}"
    }
  }
}
