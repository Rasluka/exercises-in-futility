export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl: string;
  isConfirmed: true;
  dateCreated: string;
  dateModified: string;
  lastModifiedBy: string;
}

export interface IUserSignIn {
  email: string;
  password: string;
  tenantId: string;
}

export interface ICurrentUser {
  id: number;
  name: string;
  roles: [] | null;
  tenantId: string;
  siteId: number;
}

export interface IUserRegister {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
  avatarUrl: string;
  tenantId: string;
}
