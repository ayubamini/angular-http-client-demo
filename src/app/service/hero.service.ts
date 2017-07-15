import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


import { Member } from '../model/member';


@Injectable()

export class HeroService {

    private heroesUrl = 'api/members';  // URL to web api

    constructor(private http: Http) { }

    getHeroes(): Promise<Member[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Member[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}