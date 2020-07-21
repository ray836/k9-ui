export class LitterDTO {
  born: string
  goHome: string
  breed: string
  weight: string
  deposit: number
  price: number
  description: string
  health: string
  fatherId: string
  motherId: string
  reserveInfo: string
  waitingListName: string
  waitingListInfo: string
  waitingListLimit: number
  photos: string[]

  constructor(
    json
  ){
    this.born = json.born
    this.goHome = json.goHome
    this.breed = json.breed
    this.weight = json.weight
    this.deposit = json.deposit
    this.price = json.price
    this.description = json.description
    this.health = json.health
    this.fatherId = json.fatherId
    this.motherId = json.motherId
    this.reserveInfo = json.reserveInfo
    this.waitingListName = json.waitingListName
    this.waitingListInfo = json.waitingListInfo
    this.waitingListLimit = json.waitingListLimit
    this.photos = json.photos
  }


  jsonFill(jsonData){
    this.born = jsonData.born
    this.goHome = jsonData.goHome
    this.breed = jsonData.breed
    this.weight = jsonData.weight
    this.deposit = jsonData.deposit
    this.price = jsonData.price
    this.description = jsonData.description
    this.health = jsonData.health
    this.fatherId = jsonData.father
    this.motherId = jsonData.mother
    this.reserveInfo = jsonData.reserveInfo
    this.waitingListName = jsonData.waiting_list_id
    this.photos = jsonData.photos
  }



}

