import {Document} from "mongoose"

export interface IProduct extends Document{
    business_id:string;
    name: string;
    description: string;
    price: number;
    isAvailable: boolean;
    sku: string;
    is_active: boolean,
    image: string,

}