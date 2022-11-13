import { ICreatedOrUpdatedBy } from "@/types/app/common";

export interface IGetProductFilter {
  code?: string;
  name?: string;
  rentPeriod?: number;
}

export interface IProduct {
  code?: string;
  name?: string;
  type?: string;
  availability?: boolean;
  needing_repair?: boolean;
  durability?: number;
  isActive?: boolean;
  max_durability: number;
  mileage?: number | null;
  price: number;
  minimum_rent_period: number;
}

export interface IGetProductResponse {
  result: IGetProductResult;
}

export interface IGetProductResult {
  product?: IProduct[];
  count?: number;
}

export interface IProductAttributeFilterInputs {
  code?: string;
  name?: string;
  rentPeriod?: number;
}
