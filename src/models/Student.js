class Student {
  #id

  get id() {
    return this.#id
  }

  set id(value) {
    this.#id = value
  }

  #firstName

  get firstName() {
    return this.#firstName
  }

  set firstName(value) {
    this.#firstName = value
  }

  #lastName

  get lastName() {
    return this.#lastName
  }

  set lastName(value) {
    this.#lastName = value
  }

  #class

  get class() {
    return this.#class
  }

  set class(value) {
    this.#class = value
  }

  #photoURL

  get photoURL() {
    return this.#photoURL
  }

  set photoURL(value) {
    this.#photoURL = value
  }

  #phoneNumber

  get phoneNumber() {
    return this.#phoneNumber
  }

  set phoneNumber(value) {
    this.#phoneNumber = value
  }

  #gender

  get gender() {
    return this.#gender
  }

  set gender(value) {
    this.#gender = value
  }

  #birthdate

  get birthdate() {
    return this.#birthdate
  }

  set birthdate(value) {
    this.#birthdate = value
  }

  #address

  get address() {
    return this.#address
  }

  set address(value) {
    this.#address = value
  }

  constructor(data) {
    this.#id = data.id
    this.#firstName = data.firstName
    this.#lastName = data.lastName
    this.#class = data.class
    this.#photoURL = data.photoURL
    this.#phoneNumber = data.phoneNumber
    this.#gender = data.gender
    this.#birthdate = data.birthdate
    this.#address = data.address
  }
  // Define your model properties and methods here
}
export default Student
