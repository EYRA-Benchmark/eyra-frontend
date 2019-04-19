export const objectToQueryParams = (obj: object = {}) =>
  Object.keys(obj)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
    .join("&");

export const formatDate = (date: Date) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  return day + " " + monthNames[monthIndex] + " " + year;
};

// maps the values of an object to something else
export const mapValues = (obj: any, f: (val: any) => any) => Object.assign({},
  ...Object.entries(obj).map(
    ([k, v]) => ({[k]: f(v)}),
  ),
);
