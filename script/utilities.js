export const dayFormat = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
});

export const monthFormat = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
});

export const dateFormat = new Intl.DateTimeFormat("en-US", {
  timeZone: "Australia/Brisbane",
  dateStyle: "short",
});

export const inputFormat = new Intl.DateTimeFormat("fr-CA", {
  timeZone: "Australia/Brisbane",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

export const setDate = (y, m, d) => {
  return new Date(y, m, d, 0, 0, 0);
};

export const toProperCase = (str) =>
  str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
