import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/Rx';

@Injectable()
export class GithubApiService {
	private _url: string = "https://api.github.com/user/";

	constructor(private _http: Http) {
	}

	getUserInfo(usrname) {
		return this._http.get(this._url + usrname)
			.map(res => {
				return res.json()
			});
	}
}
