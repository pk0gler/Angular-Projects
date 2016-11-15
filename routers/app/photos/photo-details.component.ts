
import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OnActivate} from "@angular/router-deprecated";

@Component({
    template: `<h1>Photo Details {{ id }}</h1>
    `
})
export class PhotoDetailsComponent implements OnInit, OnDestroy {
    id;
    sub;

    constructor(private _route : ActivatedRoute) {

    }

    ngOnInit(): void {
        // this.sub = this._route.params.subscribe(params => {
        //     this.id = +params["id"];
        // })
        this.id = this._route.snapshot.params["id"];
    }

    ngOnDestroy(): void {
        //this.sub.unsubscribe();
    }
}