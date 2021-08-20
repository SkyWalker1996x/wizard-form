export interface IAccountForm {
  id?: number | string;
  username: string;
  password: string;
  confirmPassword: string;
  avatar: string | undefined;
}

export interface ICapabilitiesForm {
  id?: number | string;
  skills: Array<{ value: string; label: string }>;
  addInformation: string;
  hobbies: string[];
}

export interface IContactsForm {
  id?: number | string;
  company: string;
  githubLink: string;
  facebookLink: string;
  mainLang: { value: string; label: string } | undefined;
  fax: string;
  phones: Array<string>;
}

export interface IProfileForm {
  id?: number | string;
  firstName: string;
  lastName: string;
  birthDate: number | null | undefined;
  email: string;
  address: string;
  gender: string;
}

export interface ICreateUserForm
  extends IAccountForm,
    IProfileForm,
    IContactsForm,
    ICapabilitiesForm {}

export interface ISendUserData extends ICreateUserForm {
  lastUpdate: number | null | undefined;
}

export interface IUser extends ISendUserData {
  id: number;
}

export interface IUsersState {
  items: Array<IUser>;
  status: string;
  page: number;
  total: number;
  perPage: number;
}
