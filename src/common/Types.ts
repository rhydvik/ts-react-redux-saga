export interface IRoute {
  path: string;
  element: any;
  layout: any;
  exact?: boolean;
}

export interface ISignInModal {
  email: string;
  password: string;
}

export interface ISagaAction<T> {
  payload: T;
  type: string;
}
