import {Document} from "mongoose"

interface IProductInOrder {
  product_id: string;  
  quantity: number;    
  price: number;       
}
export interface IOrder extends Document{
 business_id: string 
 products: IProductInOrder[];
 total_amount: number
 customer_name: string
 customer_address: string
 customer_mobile: string
 status: string
   
}