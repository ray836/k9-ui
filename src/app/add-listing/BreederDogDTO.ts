export class BreederDogDTO {
  about: string
  breed: string
  breederId: string
  gender: string
  id: string
  name: string
  photoGroup: string

  constructor(json) {
    this.about = json.about
    this.breed = json.breed
    this.breederId = json.breederId
    this.gender = json.gender
    this.id = json.id
    this.name = json.name
    this.photoGroup = json.photoGroup
  }
}
