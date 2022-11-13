export const GET_USER_LIST = "GET_USER_LIST";

export interface GetUserListActions {
  type: typeof GET_USER_LIST;
  payload: any[];
}

export type UserListActions = GetUserListActions;
