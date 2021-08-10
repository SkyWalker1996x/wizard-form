import { validate as accountValidate } from './Account/validation';
import { validate as profileValidate } from './Profile/validation';
import { validate as contactsValidate } from './Contacts/validation';
import { validate as capabilitiesValidate } from './Capabilities/validation';

export const validate = [
  accountValidate,
  profileValidate,
  contactsValidate,
  capabilitiesValidate,
];
