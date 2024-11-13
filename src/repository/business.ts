import { baseRepository } from "./baseRepository";
import Product from "../model/product";
import { IProduct } from "../model/interface/product";
import { IBusiness } from "../model/interface/business";
import Business from "../model/business";

export class BusinessRepository extends baseRepository<IBusiness>{
    constructor(){
        super(Business)
    }
}