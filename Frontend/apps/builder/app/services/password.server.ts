import { pbkdf2Sync, randomBytes, timingSafeEqual } from "node:crypto";

const PASSWORD_HASH_ALGORITHM = "pbkdf2_sha256";
const PASSWORD_KEY_LENGTH = 32;
const PASSWORD_ITERATIONS = 210_000;

export const hashPassword = (password: string) => {
  const salt = randomBytes(16).toString("hex");
  const hash = pbkdf2Sync(
    password,
    salt,
    PASSWORD_ITERATIONS,
    PASSWORD_KEY_LENGTH,
    "sha256"
  ).toString("hex");

  return `${PASSWORD_HASH_ALGORITHM}$${PASSWORD_ITERATIONS}$${salt}$${hash}`;
};

export const verifyPassword = ({
  password,
  passwordHash,
}: {
  password: string;
  passwordHash: string;
}) => {
  const [algorithm, iterationsRaw, salt, expectedHash] =
    passwordHash.split("$");

  if (
    algorithm !== PASSWORD_HASH_ALGORITHM ||
    iterationsRaw === undefined ||
    salt === undefined ||
    expectedHash === undefined
  ) {
    return false;
  }

  const iterations = Number(iterationsRaw);
  if (Number.isFinite(iterations) === false) {
    return false;
  }

  const derivedHash = pbkdf2Sync(
    password,
    salt,
    iterations,
    PASSWORD_KEY_LENGTH,
    "sha256"
  );

  const expectedHashBuffer = Buffer.from(expectedHash, "hex");

  if (expectedHashBuffer.length !== derivedHash.length) {
    return false;
  }

  return timingSafeEqual(derivedHash, expectedHashBuffer);
};
