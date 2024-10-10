import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import * as dotenv from "dotenv";

dotenv.config();

// Ensure the environment variable is loaded
const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(
  "✅ Finished! We've loaded our secret key securely, using an env file!"
);

console.log(keypair);
