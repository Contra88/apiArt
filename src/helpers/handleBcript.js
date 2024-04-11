import bcrypt from "bcrypt";

//TODO Encriptar
export const encriptar = async (textplain) => {
  const hash = await bcrypt.hash(textplain, 10);
  return hash;
};

//TODO Comparar
export const comparar = async (textplain, hashPassword) => {
  return await bcrypt.compare(textplain, hashPassword);
};
