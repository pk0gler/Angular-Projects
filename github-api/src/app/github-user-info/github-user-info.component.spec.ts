/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {GithubUserInfoComponent} from './github-user-info.component';

describe('GithubUserInfoComponent', () => {
	let component: GithubUserInfoComponent;
	let fixture: ComponentFixture<GithubUserInfoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [GithubUserInfoComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(GithubUserInfoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
