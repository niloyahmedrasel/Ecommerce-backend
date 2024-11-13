import { baseRepository } from "./baseRepository";
import Product from "../model/product";
import { IProduct } from "../model/interface/product";

export class ProductRepository extends baseRepository<IProduct>{
    constructor(){
        super(Product)
    }
}