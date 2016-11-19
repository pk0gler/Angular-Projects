import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {PostsComponent} from "./posts/posts.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {usersRouting} from "./users/users.routing";
import {postsRouting} from "./posts/posts.routing";
import {appRouting} from "./app.routing";

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		HomeComponent,
		UsersComponent,
		PostsComponent,
		NotfoundComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
	  	usersRouting,
		postsRouting,
		appRouting
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
