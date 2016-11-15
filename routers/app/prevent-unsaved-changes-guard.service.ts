
import {MessagesComponent} from "./messages/messages.component";
import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";

export interface FormComponent {
	// form: FormGroup;
	hasUnsavedChanges() : Boolean;
}

export class PreventUnsavedChangesGuard implements CanDeactivate<FormComponent> {
	canDeactivate(component: FormComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
		if (component.hasUnsavedChanges()) {
			return confirm("Are yoz sure");
		}

		return true;
	}

}