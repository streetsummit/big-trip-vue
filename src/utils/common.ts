import { klona } from 'klona';

const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

const slugify = (str: string, separator = '-') => {
  return str
    .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, '') // remove all chars not letters, numbers and spaces (to be replaced)
    .replace(/\s+/g, separator);
};

const cloneDeep = <T>(prop: T) => klona(prop);

export { capitalizeFirstLetter, slugify, cloneDeep };
