export type AuthState = {
  user: User;
  isLoading: boolean;
  loggedIn: boolean;
};

export type User = {
  name: string;
};

export type AuthPayload = {
  user: User;
};

export type AuthAction = {
  type: string;
  payload?: AuthPayload;
};

export type LoginParams = {
  email: string;
  password: string;
};
