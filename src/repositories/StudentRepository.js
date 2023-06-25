import {FirebaseGateway as FBGateway} from '../gateways'
import Student from '../models/Student'

const StudentRepository = {
  async signIn(email, password) {
    try {
      const {user} = await FBGateway.signIn(email, password)
      const {data} = await FBGateway.getUser(user.uid)
      const student = new Student({
        id: user.uid,
        ...data(),
      })
      return student
    } catch (error) {
      throw new Error(error)
    }
  },

  async signUp(email, password, firstName, lastName, phoneNumber, gender, birthdate, address) {
    const {user} = await FBGateway.signUp(email, password)
    await FBGateway.insertStudent(
      firstName,
      lastName,
      null,
      phoneNumber,
      gender,
      birthdate,
      address,
      user.uid
    )
    return new Student({
      id: user.uid,
      firstName,
      lastName,
      class: null,
      phoneNumber,
      gender,
      birthdate,
      address,
    })
  },
}
export default StudentRepository
