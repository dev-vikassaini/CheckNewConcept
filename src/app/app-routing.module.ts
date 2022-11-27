import { LoginComponent } from './account/login/login.component';
import { Angular13NewFutureComponent } from './angular13-new-future/angular13-new-future.component';
import { NgModule } from '@angular/core';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OnPushSampleComponent } from './on-push-sample/on-push-sample.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormSampleComponent } from './reactive-form-sample/reactive-form-sample.component';
import { StandaloneComponent } from './standalone/standalone.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { DeactivateGuardGuard } from './shared/services/deactivate-guard.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home', canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'Standalone', component: StandaloneComponent, title: 'Standalone', canActivate: [AuthGuardService] },
  {
    path: 'TypedForms', component: ReactiveFormSampleComponent, title: 'Typed Forms',
    canActivate: [AuthGuardService], canDeactivate: [DeactivateGuardGuard]
  },
  { path: 'OnPush', component: OnPushSampleComponent, title: 'OnPush', canActivate: [AuthGuardService] },
  {
    path: 'Angular13NewFuture', component: Angular13NewFutureComponent, title: 'Angular 13 New Future',
    canActivate: [AuthGuardService]
  },
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
