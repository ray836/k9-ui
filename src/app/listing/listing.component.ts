import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LitterDTO } from '../add-listing/litterDTO';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  posts: any;
  listing: LitterDTO = new LitterDTO({born:"",goHome: "",breed: "",weight: "",deposit: 0,price: 0,description: "",health: "",father:"",mother:"",reserveInfo:"",waitingList:"",photos:[""]});

  constructor(private listingService: ListingService, private http: HttpClient) { }

  getListing() {
    console.log("doing in!")
    // var headers = {headers: new HttpHeaders().set('Authorization', 'Basic cmF5Z3JhbnQzNkBnbWFpbC5jb206cGFzc3dvcmQ=')}
    // this.posts = this.http.get('http://localhost:8080/listing/litter/525b1c43-fcdf-4c2a-82c7-54532acae7ad', headers)
    // console.log(this.posts)
    // this.posts = this.http.get('http://localhost:8080/listing/litters', headers)
    // console.log(this.posts)
    var headers = {headers: new HttpHeaders().set('Host', 'ec2-54-212-148-107.us-west-2.compute.amazonaws.com:8080')}
    this.http.get('ec2-54-212-148-107.us-west-2.compute.amazonaws.com:8080/listing/litter/525b1c43-fcdf-4c2a-82c7-54532acae7ad', headers).subscribe(res =>
    {console.log("in here!")
    this.listing.jsonFill(res)
  console.log(res)
  console.log("this is listing")
  console.log(this.listing)
  }
    )
  }


  ngOnInit(): void {

    this.getListing()
    // this.listing = {
    //   born: "2020-06-24",
    //   breed: "Booderdoodle",
    //   breederId: "6bc22e9e-9079-11ea-9216-029e8920a66a",
    //   deposit: 200,
    //   description: "Mini Borderdoodles.",
    //   father_id: "804e71fa-91ab-11ea-a61d-029e8920a66a",
    //   go_home: "2020-07-24",
    //   health: "On track for first deworming and shot.",
    //   id: "525b1c43-fcdf-4c2a-82c7-54532acae7ad",
    //   is_born: false,
    //   mother_id: "4ad7a64a-91ab-11ea-a61b-029e8920a66a",
    //   photo_group: "ae3244d6-e3f0-4cf6-8693-4cd0eeefda4b",
    //   price: 2000,
    //   reserve_info: "res",
    //   waiting_list_id: "7ffe850b-f3f8-4f8a-ab94-db2f92819921",
    //   weight: "20 lbs"
    // }


  }



}
