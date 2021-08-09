export const transformToSelectOptions = (obj: { [key: string]: string }) => {
  let arr: Array<{ value: string; label: string }> = [];

  Object.keys(obj).forEach(key => {
    arr = [...arr, { value: key, label: obj[key] }];
  });

  return arr;
};
