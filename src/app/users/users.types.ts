export interface UserData {
  id?: string;
  username: string;
  password?: string;
  firstname: string;
  lastname: string;
  verified: boolean;
  token?: string;
}

export interface IUserState {
  isLoggedIn?: boolean;
  data?: Partial<UserData>;
  errorMessage?: string;
  successMessage?: string;
  processing?: boolean;
}
