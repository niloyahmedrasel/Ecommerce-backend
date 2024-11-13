import { ProductRepository } from "../repository/product";

const productRepository = new ProductRepository();
export class ProductService {
  async create(product: any) {
    if (product) {
      const response = await productRepository.create(product);
      return response;
    } else {
      throw new Error("Product not created");
    }
  }

  async get(productId: any) {
    if (productId) {
      const response = await productRepository.findById(productId);
      return response;
    } else {
      throw new Error("Product not found");
    }
  }

  async getAll() {
    console.log("------------service");
    try {
      const response = await productRepository.find({});
      console.log("Fetched products:", response);
      return response;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Error fetching products");
    }
  }

  async update(product: any) {
    const { name, description, price, isAvailable, sku, image, productId } =
      product;
    const id = productId as string;
    if (product) {
      const response = await productRepository.updateByID(id, {
        name,
        description,
        price,
        isAvailable,
        sku,
        image,
      });
      return response;
    } else {
      throw new Error("Product not updated");
    }
  }

  async delete(productId: any) {
    if (productId) {
      const response = await productRepository.deleteById(productId);
      return response;
    } else {
      throw new Error("Product not deleted");
    }
  }
}
