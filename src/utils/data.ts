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

  return modifiedProperties;
};
