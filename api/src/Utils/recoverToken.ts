export const recoverToken = (token: string | undefined): string => {
  if (typeof token !== "string") {
    throw new Error("El token no es una cadena válida.");
  }

  if (!token.startsWith("Bearer ")) {
    throw new Error("El token no tiene el formato esperado.");
  }

  const extractedToken = token.slice(7);

  if (!extractedToken.trim()) {
    throw new Error("El token está vacío o es inválido.");
  }

  return extractedToken;
};
