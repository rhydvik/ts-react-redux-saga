export interface IRoute {
  path: string;
  component: any;
  layout: any;
}

export interface ISignInModal {
  email: string;
  password: string;
}

export interface ISagaAction<T> {
  payload: T;
  type: string;
}
