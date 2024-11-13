import { IOrder } from "../model/interface/order";
import Order from "../model/order";
import { baseRepository } from "./baseRepository";


export class OrderRepository extends baseRepository<IOrder>{
    constructor(){
        super(Order)
    }
}