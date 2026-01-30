async function permitedCharacters() {
  let permitedCharacters = [];
  if (process.env.UPPERCASE_LETTERS == "true") permitedCharacters.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  if (process.env.LOWERCASE_LETTERS == "true") permitedCharacters.push(..."abcdefghijklmnopqrstuvwxyz");
  if (process.env.NUMBERS == "true") permitedCharacters.push(..."0123456789");
  if (process.env.SYMBOLS == "true") permitedCharacters.push(..."!@#$%^&*()-+_");

  return permitedCharacters;
}

export default permitedCharacters;