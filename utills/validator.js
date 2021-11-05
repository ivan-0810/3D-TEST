

export const required = value =>
  value || typeof value === 'number' ? undefined : 'Obligatoire';

export const number = value =>
  value && Number.isNaN(Number(value)) ? 'Doit être un nombre' : undefined;

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Adresse e-mail invalide'
    : undefined;
export const tooYoung = value =>
  value && value < 18
    ? `Vous ne remplissez pas l'âge minimum requis!`
    : undefined;
   export  const correctDateNum = value =>
    value && value > 31 ? 'entrez la date correcte' : undefined;
    export  const correctMonuthNum = value =>
    value && value > 12 ? 'entrez le mois correct' : undefined
    export  const correctYearNum = value =>
    value && value < 1900 ? `entrez l'année correcte` : undefined