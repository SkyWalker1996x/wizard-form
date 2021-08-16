export interface IAccountForm {
    username: string;
    password: string;
    confirmPassword: string;
    avatar: string | undefined;
}

export interface ICapabilitiesForm {
    skills: Array<{ value: string; label: string }>;
    addInformation: string;
    hobbies: string[];
}

export interface IContactsForm {
    company: string;
    githubLink: string;
    facebookLink: string;
    mainLang: { value: string; label: string } | undefined;
    fax: string;
    phones: Array<string>;
}

export interface IProfileForm {
    firstName: string;
    lastName: string;
    birthDate: Date | null | undefined;
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
    lastUpdate: Date | null | undefined;
}

export interface IUser extends ISendUserData {
    id: number;
}

export interface IUsersState {
    items: Array<IUser>;
    status: string;
}
