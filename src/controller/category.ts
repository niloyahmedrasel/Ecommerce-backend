import { Request, Response } from "express";
import { CategoryService } from "../service/category";

const categoryService = new CategoryService();
export class CategoryController {
  async create(req: Request, res: Response): Promise<any> {
    const {name,image} = req.body;
    const data ={
      name,
      image
    }
    try{
      const response = await categoryService.create(data);
      return res.status(200).json(response);
    }catch(err){
      res.status(400).json(err);
    }
  }

  async get(req: Request, res: Response): Promise<any> {
    const categoryId = req.params._id;
    try{
      const response = await categoryService.get(categoryId);
      return res.status(200).json(response);
    }catch(err){
      res.status(400).json(err);
    }
  }

  async update(req: Request, res: Response): Promise<any> {
    const {name,image} = req.body;
    const categoryId = req.params._id;
    const data = {
      name,
      image,
      categoryId
    }
    try{
      const response = await categoryService.update(data);
      return res.status(200).json(response);
    }catch(err){
      res.status(400).json(err);
    }
  }

  async delete(req: Request, res: Response): Promise<any> {
    const categoryId = req.params._id;
    try{
      const response = await categoryService.delete(categoryId);
      return res.status(200).json(response);
    }catch(err){
      res.status(400).json(err);
    }
  }
}