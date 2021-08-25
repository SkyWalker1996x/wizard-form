import * as faker from 'faker/locale/en_AU';

import { FixTypeLater } from 'types';

export const transformObjToSelectOptions = (obj: { [key: string]: string }) => {
  let arr: Array<{ value: string; label: string }> = [];

  Object.keys(obj).forEach(key => {
    arr = [...arr, { value: key, label: obj[key] }];
  });

  return arr;
};

export const transformArrToSelectOptions = (arr: string[]) => {
  return arr.map(item => {
    return { value: item, label: item };
  });
};

const isObject = (obj: FixTypeLater) => {
  return obj !== null && typeof obj === 'object';
};

export const extractModifiedProperties = (obj1: FixTypeLater, obj2: FixTypeLater) => {
  let modifiedProperties = {};

  Object.keys(obj1).forEach(key => {
    if (isObject(obj1[key]) && isObject(obj2[key])) {
      if (JSON.stringify(obj1[key]) !== JSON.stringify(obj2[key])) {
        modifiedProperties = { ...modifiedProperties, [key]: obj2[key] };
      }
    } else if (obj1[key] !== obj2[key]) {
      modifiedProperties = { ...modifiedProperties, [key]: obj2[key] };
    }
  });

  return Object.keys(modifiedProperties).length === 0 ? null : modifiedProperties;
};

export const generateUsers = () => {
  return Array.from({ length: 50 }, (_, index) => {
    const password = faker.internet.password();

    return {
      avatar: `https://picsum.photos/200?random=${index + 1}`,
      username: faker.name.lastName(),
      password,
      confirmPassword: password,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      birthDate: faker.date.past(18).getTime(),
      email: faker.internet.email(),
      address: faker.address.streetAddress(),
      gender: index % 2 === 1 ? 'Male' : 'Female',
      phones: [faker.phone.phoneNumber('+38 (0##) ###-##-##')],
      fax: faker.phone.phoneNumber('+38 (0##) ###-##-##'),
      company: faker.company.companyName(),
      githubLink: faker.internet.url(),
      facebookLink: faker.internet.url(),
      mainLang: { value: 'es', label: 'Spanish' },
      skills: [
        { value: 'Javascript', label: 'Javascript' },
        { value: 'React', label: 'React' },
        { value: 'Git', label: 'Git' },
      ],
      additionalInformation: 'Additional information',
      lastUpdate: faker.date.recent(99).getTime(),
    };
  });
};

export const removeEmptyItems = (arr: Array<any>) => {
  let newArr: Array<string> = [];

  arr.forEach(item => {
    if (typeof item === 'string' && item.trim() !== '') {
      newArr = [...newArr, item];
    }
  });

  return newArr;
};

export const removeEmptyArrayItems = (obj: FixTypeLater) => {
  const newObj = {};

  Object.keys(obj).forEach(key => {
    // @ts-ignore
    if (Array.isArray(obj[key])) {
      // @ts-ignore
      newObj[key] = removeEmptyItems(obj[key]);
    } else {
      // @ts-ignore
      newObj[key] = obj[key];
    }
  });

  return newObj as FixTypeLater;
};
