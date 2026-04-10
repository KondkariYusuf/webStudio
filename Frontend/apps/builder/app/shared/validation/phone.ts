export const phoneNumberRegex = /^\+?[1-9]\d{7,14}$/;

export const phoneNumberPattern = phoneNumberRegex.source;

export const phoneNumberErrorMessage =
  "Phone number must be a valid international number";
