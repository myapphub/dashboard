export interface User {
  username: string;
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
  email_verified: boolean;
  token: string;
}

export interface LoginRequest {
  account: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
}
