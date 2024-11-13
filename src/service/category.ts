import { CategoryRepository } from "../repository/category";

const categoryRepository = new CategoryRepository();
export class CategoryService {
  async create(category: any) {
    if (category) {
      const response = await categoryRepository.create(category);
      return response;
    } else {
      throw new Error("Category not created");
    }
  }

  async get(categoryId: any) {
    if (categoryId) {
      const response = await categoryRepository.findById(categoryId);
      return response;
    } else {
      throw new Error("Category not found");
    }
  }

  async update(category: any) {
    const { name, image, categoryId } = category;
    const id = categoryId as string;
    if (category) {
      const response = await categoryRepository.updateByID(id, {
        name,
        image,
      });
      return response;
    } else {
      throw new Error("Category not updated");
    }
  }

  async delete(categoryId: any) {
    if (categoryId) {
      const response = await categoryRepository.deleteById(categoryId);
      return response;
    } else {
      throw new Error("Category not deleted");
    }
  }
}
