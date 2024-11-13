import { OrderRepository } from "../repository/order";

const orderRepository = new OrderRepository();
export class OrderService {
  async create(data: any) {
    if (data) {
      const response = await orderRepository.create(data);
      return response;
    } else {
      throw new Error("Order not created");
    }
  }

  async get(orderId: any) {
    if (orderId) {
      const response = await orderRepository.findById(orderId);
      return response;
    } else {
      throw new Error("Order not found");
    }
  }

  async update(data: any) {
    if (data) {
      const response = await orderRepository.updateOne(
        { _id: data.orderId },
        data
      );
      return response;
    } else {
      throw new Error("Order not updated");
    }
  }

  async delete(orderId: any) {
    if (orderId) {
      const response = await orderRepository.deleteById(orderId);
      return response;
    } else {
      throw new Error("Order not deleted");
    }
  }
}
