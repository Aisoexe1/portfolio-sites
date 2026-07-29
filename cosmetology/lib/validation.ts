export const phonePattern=/^\+380\d{9}$/;
export function normalizePhone(value:string){const digits=value.replace(/\D/g,"").replace(/^380?/,"");return `+380${digits.slice(0,9)}`;}
