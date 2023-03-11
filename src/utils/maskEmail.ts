export default function maskEmail(email: string) {
  const [first, last] = email.split("@");
  const firstChars = first.slice(0, 3);
  const lastChars = first.slice(-3);
  const maskedEmail = `${firstChars}***${lastChars}@${last}`;
  return maskedEmail;
}
