import { IUserOutput } from "../../../db/models/user";

export interface LoginDto {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: IUserOutput;
}
