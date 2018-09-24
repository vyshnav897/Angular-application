import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {

    constructor(private http: HttpClient) { }

    getUsers(): Observable<any> {
        let url = "posts";
        return this.http.get(url);
    }

    putUser(data, id) {
        let url = "posts/" + id;
        return this.http.put(url, data);
    }
    deleteUser(id) {
        let url = "posts/" + id;
        return this.http.delete(url);
    }

}
