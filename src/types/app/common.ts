import { IBaseResponse } from "../models/apps/common";

export interface IGetUploadSignedUrlInput {
  ext: string;
  isPrivate?: boolean;
}

export interface IUploadSignedUrlResult {
  name: string;
  url: string;
}

export interface IGetUploadSignedUrlResponse extends IBaseResponse {
  result: IUploadSignedUrlResult;
}

export interface IImage {
  name?: string;
  signedUrl?: string;
  url: string;
}

export interface IImageInput {
  name: string;
  signedUrl?: string;
  url: string;
}

export interface ICreatedOrUpdatedBy {
  name: string;
  uid: string;
  userType: string;
}
