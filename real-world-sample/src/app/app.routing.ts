import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {NotfoundComponent} from "./notfound/notfound.component";
export const appRouting = RouterModule.forRoot([
	{ path: '', component: HomeComponent },
	{ path: 'not-found', component: NotfoundComponent },
	{ path: '**', redirectTo: 'not-found'}
])