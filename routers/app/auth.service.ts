
import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {
	isLoggedIn = false;

	login (usrn, passwd) {
		this.isLoggedIn = true;
	}

	logout() {
		this.isLoggedIn = false;
	}
}