export const objectToQueryParams = (obj: object = {}) =>
  Object.keys(obj)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
    .join('&');

export const formatDate = (date: Date | string) => {
  if (typeof date === 'string') {
    date = new Date(date);
  }
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  return day + ' ' + monthNames[monthIndex] + ' ' + year;
};

// maps the values of an object to something else
export const mapValues = (obj: any, f: (val: any) => any) => Object.assign({},
  ...Object.entries(obj).map(
    ([k, v]) => ({ [k]: f(v) }),
  ),
);

export const formatDateTime = (date: Date | string) => {
  if (typeof date === 'string') {
    date = new Date(date);
  }
  const OPTIONS = {
    year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit',
  };
  const format = date.toLocaleDateString('en-US', OPTIONS);
  return format;
};

// Omit allows one to remove a property from a type/interface
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type Merge<M, N> = Omit<M, Extract<keyof M, keyof N>> & N;
