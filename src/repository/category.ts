import { baseRepository } from "./baseRepository";
import { ICategory } from "../model/interface/category";
import Category from "../model/category";

export class CategoryRepository extends baseRepository<ICategory>{
    constructor(){
        super(Category)
    }
}