import { validate as accountValidate } from './Account/validation';
import { validate as profileValidate } from './Profile/validation';

export const validate = [accountValidate, profileValidate];
