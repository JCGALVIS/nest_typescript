export const name = "Juan";
export const age = 29;
export const isValid = true;
export const templateString = `Esto es un string 
multilinea
que puede tener
" dobles
' simple
inyectar valores ${name}
experesiones ${1 + 1}
numeros: ${age}
boileanos: ${isValid}`;

console.log(templateString);
