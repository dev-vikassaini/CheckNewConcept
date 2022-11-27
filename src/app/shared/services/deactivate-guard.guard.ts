import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ReactiveFormSampleComponent } from 'src/app/reactive-form-sample/reactive-form-sample.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuardGuard implements CanDeactivate<ReactiveFormSampleComponent> {
  canDeactivate(
    component: ReactiveFormSampleComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canExit ? component.canExit() : true;
  }

}

export interface IDeactivateComponent {
  canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}