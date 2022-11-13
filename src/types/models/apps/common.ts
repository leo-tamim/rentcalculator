export interface IBaseResponse {
  message: string;
  statusCode: number;
}

export interface IBasePagination {
  limit: number;
  skip: number;
}

export interface ICommonSelectAndAutocompleteItem {
  value?: string;
  label?: string;
}

export interface IDropzoneFile extends File {
  preview?: string;
}
