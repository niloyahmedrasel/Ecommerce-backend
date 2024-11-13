import {Document} from "mongoose"

export interface IBusiness extends Document{
  name: string,
  email: string,
  password: string,
  logo: string
}