import { Request, Response } from "express";
import { BusinessService } from "../service/business";

const businessService = new BusinessService();
export class BusinessController {
  async create(req: Request, res: Response): Promise<any> {
    const { name, email, password, logo } = req.body;
    try {
      const business = {
        name,
        email,
        password,
        logo,
      };

      const response = await businessService.create(business);

      return res.status(200).json(response);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async get(req: Request, res: Response): Promise<any> {
    const businessId = req.params._id;

    try {
      const response = await businessService.get(businessId);
      return res.status(200).json(response);
  }catch (err) {
      res.status(400).json(err);
    }
  }
  
  async update(req: Request, res: Response): Promise<any> {
    const {name, email, password, logo} = req.body;
    const businessId = req.params._id;
    const business = {
      name,
      email,
      password,
      logo,
      businessId
    };

    try{
      const response = await businessService.update(business);
      return res.status(200).json(response);
    }catch(err){
      res.status(400).json(err);
    }
  }

  async delete(req: Request, res: Response): Promise<any> {
    const businessId = req.params._id;
    try {
      const response = await businessService.delete(businessId);
      return res.status(200).json(response);
    } catch (err) {
      res.status(400).json(err);
    }
  }
}
