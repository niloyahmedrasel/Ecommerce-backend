import { Request, Response } from "express";
import { OrderService } from "../service/order";
import { OrderRepository } from "../repository/order";

const orderRepository = new OrderRepository();
const orderService = new OrderService();
export class OrderController {
  async create(req: Request, res: Response): Promise<any> {
    const {
      total_amount,
      customer_name,
      customer_address,
      customer_mobile,
      products,
    } = req.body;

    const businessId = req.params._id;

    const data = {
      total_amount,
      customer_name,
      customer_address,
      customer_mobile,
      products,
      business_id: businessId,
    };

    try {
      const response = await orderService.create(data);
      return res.status(200).json(response);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async get(req: Request, res: Response): Promise<any> {
    const orderId = req.params._id;
    try {
      const response = await orderService.get(orderId);
      return res.status(200).json(response);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async update(req: Request, res: Response): Promise<any> {
    const {
      total_amount,
      customer_name,
      customer_address,
      customer_mobile,
      products,
    } = req.body;
    const orderId = req.params._id;
    const data = {
      total_amount,
      customer_name,
      customer_address,
      customer_mobile,
      products,
      orderId,
    };
    try {
      const response = await orderService.update(data);
      return res.status(200).json(response);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async delete(req: Request, res: Response): Promise<any> {
    const orderId = req.params._id;
    try {
      const response = await orderService.delete(orderId);
      return res.status(200).json(response);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async filterOrder(req: Request, res: Response): Promise<any> {
    try {
      const mongooseFilter = (req as any).mongooseFilter || {};
      const orders = await orderRepository.find(mongooseFilter);
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: "Error fetching orders", error });
    }
  }
}
