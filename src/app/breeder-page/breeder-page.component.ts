import { Component, OnInit } from '@angular/core';
import { LitterDTO } from '../add-listing/litterDTO';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-breeder-page',
  templateUrl: './breeder-page.component.html',
  styleUrls: ['./breeder-page.component.scss']
})
export class BreederPageComponent implements OnInit {
  litters: LitterDTO[] = []


  constructor(private listingService: ListingService) { }

  ngOnInit(): void {
    this.getLitters()
  }





  getLitters(){
    console.log("getting litters:,,,")
    var jsonLitters = this.listingService.getListings().subscribe(res =>
      {
        console.log(res)
       res.forEach(x => this.litters.push(new LitterDTO(x)))
      }
      )
    console.log("formed litters: ")
    console.log(jsonLitters)

    console.log("++=================+++++++++++========[")
    var jsonTest = this.listingService.getTest().subscribe(res =>
      {
        console.log("$$$$$")
        console.log(res)
      }
      )
  }

}
