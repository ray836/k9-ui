import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LitterDTO } from './add-listing/litterDTO';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  private baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  getListings(): Observable<any> {
    // var headers = {headers: new HttpHeaders().set('Authorization', 'Basic cmF5Z3JhbnQzNkBnbWFpbC5jb206cGFzc3dvcmQ=')}
    return this.http.get(this.baseUrl + '/listing/litters')//, headers)
  }

  postListing(listing: LitterDTO): Observable<any> {
    // var headers = {headers: new HttpHeaders().set('Authorization', 'Basic cmF5Z3JhbnQzNkBnbWFpbC5jb206cGFzc3dvcmQ=')}
    let headers = new HttpHeaders();
    headers = headers.append("Authorization", "Basic " + btoa("ray:password"));
    headers.append('Content-Type', 'application/json')
    console.log(this.baseUrl + '/litter/create')
    return this.http.post<LitterDTO>('http://localhost:8080/litter/create', listing, {headers: headers})//, headers)
  }

  getBreedingDogs(): Observable<any> {
    const username = 'ray'
    const password = 'password'
    let headers = new HttpHeaders();
    headers = headers.append("Authorization", "Basic " + btoa("ray:password"));
    // var headers = new HttpHeaders().set('Authentication', 'Basic ' + btoa(username+":"+password))
    return this.http.get("http://localhost:8080/breeder/breeding-dogs", {headers: headers})
  }

  getTest(): Observable<any> {
    const username = 'ray'
    const password = 'password'
    let headers = new HttpHeaders();
    headers = headers.append("Authorization", "Basic " + btoa("ray:password"));
    // var headers = new HttpHeaders().set('Authentication', 'Basic ' + btoa(username+":"+password))
    return this.http.post("http://localhost:8080/litter/test", {headers, responseType: 'text' as 'json'})
  }
}
