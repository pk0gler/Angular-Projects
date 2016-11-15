import {Component, OnInit, Input} from '@angular/core';
import {GithubApiService} from "../services/github-api.service";
import {userInfo} from "os";

@Component({
	selector: 'app-github-user-info',
	templateUrl: './github-user-info.component.html',
	styleUrls: ['./github-user-info.component.css'],
	providers: [GithubApiService]
})
export class GithubUserInfoComponent implements OnInit {

	@Input() usrname: string;

	isLoading: boolean = true;
	isUp: boolean = true;
	jsonObject: JSON;

	constructor(private _gitService: GithubApiService) {

	}

	onclick() {
		this.isUp = !this.isUp;
	}

	ngOnInit() {
		this._gitService.getUserInfo(this.usrname)
			.subscribe(res => {
				console.log(res);
				this.isLoading = false;
				this.jsonObject = res;
			})
	}

}
