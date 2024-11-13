import { Request, Response } from "express";
import { ProductService } from "../service/product";
import { ProductRepository } from "../repository/product";

const productService = new ProductService();
const productRepository = new ProductRepository();
export class ProductController {
  async create(req: Request, res: Response): Promise<any> {
    const { name, description, price, isAvailable, sku, image } = req.body;
    const businessId = req.params._id;

    const data = {
      name,
      description,
      price,
      isAvailable,
      sku,
      image,
      business_id: businessId,
    };
    try {
      const response = await productService.create(data);
      return res.status(200).json(response);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  }

  async get(req: Request, res: Response): Promise<any> {
    console.log("------------controller");
    const productId = req.params._id;
    try {
      const response = await productService.get(productId);
      return res.status(200).json(response);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async getAll(req: Request, res: Response): Promise<any> {
    console.log("------------controller");
    try {
      const response = await productService.getAll();
      return res.status(200).json(response);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async update(req: Request, res: Response): Promise<any> {
    const { name, description, price, isAvailable, sku, image } = req.body;
    const productId = req.params._id;
    const data = {
      name,
      description,
      price,
      isAvailable,
      sku,
      image,
      productId,
    };
    try {
      const response = await productService.update(data);
      return res.status(200).json(response);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async delete(req: Request, res: Response): Promise<any> {
    const productId = req.params._id;
    try {
      const response = await productService.delete(productId);
      return res.status(200).json(response);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async filterProducts(req: Request, res: Response): Promise<any> {
    try {
      const mongooseFilter = (req as any).mongooseFilter || {};
      const products = await productRepository.find(mongooseFilter);
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Error fetching products", error });
    }
  }
}
