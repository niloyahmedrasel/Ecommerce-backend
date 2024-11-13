import { BusinessRepository } from "../repository/business";

const businessRepository = new BusinessRepository();
export class BusinessService {
  async create(business: any) {
    const { name, email, password, logo } = business;

    if (business) {
      const response = await businessRepository.create({
        name,
        email,
        password,
        logo,
      });
      return response;
    } else {
      throw new Error("Business not created");
    }
  }

  async get(businessId: any) {
    if (businessId) {
      const response = await businessRepository.findById(businessId);
      return response;
    } else {
      throw new Error("Business not found");
    }
  }

  async update(business: any) {
    const { name, email, password, logo, businessId } = business;
    const id = businessId as string;
    if (business) {
      const response = await businessRepository.updateByID(id, {
        name,
        email,
        password,
        logo,
      });
      return response;
    } else {
      throw new Error("Business not updated");
    }
  }
  async delete(businessId: any) {
    if (businessId) {
      const response = await businessRepository.deleteById(businessId);
      return response;
    } else {
      throw new Error("Business not deleted");
    }
  }
}
