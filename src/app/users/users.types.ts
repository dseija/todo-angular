export interface UserData {
  id?: string;
  username: string;
  password?: string;
  firstname: string;
  lastname: string;
  verified: boolean;
  token?: string;
}

export interface UserState {
  isLoggedIn?: boolean;
  data?: UserData;
}
