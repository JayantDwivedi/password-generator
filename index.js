export function generatePassword(passwordLength) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&()-_+=`~;:.,?/}{][";
  var retVal = "";
  for (var i = 0, n = charset.length; i < passwordLength; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
