import { Component, OnInit } from '@angular/core';
import { LitterDTO } from './litterDTO';
import { ListingService } from '../listing.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { BreederDogDTO } from './BreederDogDTO';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.scss']
})
export class AddListingComponent implements OnInit {
  selectedFile = null
  uploadedImages = []
  posts: any;
  constructor(private listingService: ListingService, private http: HttpClient) { }

  breed = ''
  litter = ''
  born = ''
  isborn = false
  goHome = ''
  gender = ''
  weight = ''
  deposit = 0
  price = 0
  description = ''
  health = ''
  waitingListName = ''
  waitingListInfo = ''
  waitingListLimit = ''
  breedingDogs: BreederDogDTO[] = []
  fatherId = ''
  motherId = ''
  selectedFather = this.breedingDogs[0];
  selectedMother = this.breedingDogs[0];
  selectedLevel = this.breedingDogs[0];

  ngOnInit(): void {
  }

  onFileSelected(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0] as File;

      const reader = new FileReader();
      reader.onload = e => {
        this.selectedFile = reader.result
        this.uploadedImages.push(this.selectedFile)
        console.log(this.selectedFile)
      }
      reader.readAsDataURL(file);
    }
  }

  getListings(){
    var headers = {headers: new HttpHeaders().set('Host', 'ec2-54-212-148-107.us-west-2.compute.amazonaws.com:8080')}
    this.posts = this.http.get('ec2-54-212-148-107.us-west-2.compute.amazonaws.com:8080/listing/litter/525b1c43-fcdf-4c2a-82c7-54532acae7ad', headers)
    console.log(this.posts)
  }

  selChange(ev){
    console.log("it has changed!!!!")
  }

  getBreedingDogs(){
    var breedingDogs = this.listingService.getBreedingDogs().subscribe(res =>
    {
      res.forEach(element => {
        this.breedingDogs.push(new BreederDogDTO(element))
        this.selectedLevel = this.breedingDogs[0];
        this.selectedFather = this.breedingDogs[0]
        this.selectedMother = this.breedingDogs[0]
      });
    }
    )
  }


  addListing() {
    const litterToUpload = new LitterDTO({

      born: this.born,
      isBorn: this.isborn,
      goHome: this.goHome,
      breed: this.breed,
      weight: this.weight,
      deposit: this.deposit,
      price: this.price,
      description: this.description,
      health: this.health,
      fatherId: this.selectedFather.id,
      motherId: this.selectedMother.id,
      reserveInfo: 'res',
      waitingListName: this.waitingListName,
      waitingListInfo: this.waitingListInfo,
      waitingListLimit: this.waitingListLimit,
      // photos: this.uploadedImages.map( x => x.toString().split(',')[1])
      photos: this.uploadedImages.map(function(bytes) {
        return {name: "photo-name-here.png", encodedBytes: bytes.toString().split(',')[1]}
      })
    }
    )
    var jsonTest = this.listingService.postListing(litterToUpload).subscribe(res =>
      {
        console.log("$$$$$")
        console.log(res)
      }
      )
 }
}
