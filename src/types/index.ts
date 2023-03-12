export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type LoginResponse = {
  __typename?: "LoginResponse";
  accessToken: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  login?: Maybe<LoginResponse>;
  register?: Maybe<RegisterResponse>;
};

export type MutationLoginArgs = {
  username: Scalars["String"];
  password: Scalars["String"];
};

export type MutationRegisterArgs = {
  user: UserRegisterInput;
};

export type RegisterResponse = {
  __typename?: "RegisterResponse";
  name: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
};

export type UserRegisterInput = {
  name: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
  accessToken: Scalars["String"];
};
