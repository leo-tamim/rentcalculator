import {
  IBaseResponse,
  ICommonSelectAndAutocompleteItem,
} from "../models/apps/common";
import { IImageInput } from "./common";

export interface IParentCategory {
  bnName: string;
  enName: string;
  uid: string;
}

export interface ICategory {
  enName: string;
  bnName: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  inActiveNote?: string;
  uid: string;
  parent: IParentCategory;
  attributeSetUid: string;
  image: IImageInput;
}

export interface IGetCategoriesFilterInput {
  bnName?: string;
  enName?: string;
  isActive?: boolean;
  parentCategoryUid?: string;
  uid?: string;
}

export interface ICategoryCreateOrUpdateFormInput {
  bnName: string;
  enName: string;
  parentCategoryUid?: ICommonSelectAndAutocompleteItem;
  attributeSetUid?: ICommonSelectAndAutocompleteItem;
  isActive?: boolean;
  inActiveNote?: string;
  image?: IImageInput | null;
}

export interface ICreateCategoryInput {
  attributeSetUid?: string;
  bnName: string;
  enName: string;
  image?: IImageInput | null;
  parentCategoryUid?: string;
}

export interface IUpdateCategoryInput {
  attributeSetUid?: string;
  bnName: string;
  enName: string;
  image?: IImageInput | null;
  inActiveNote?: string;
  isActive?: boolean;
}

export interface ICreateCategoryResponse extends IBaseResponse {
  result: ICategory;
}

export interface IUpdateCategoryResponse extends IBaseResponse {
  result: ICategory;
}
