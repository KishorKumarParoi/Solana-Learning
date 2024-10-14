import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
} from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
const address = new PublicKey("JDjsHewXMA68XcEc5QD7xJpazusS9WEcDUaap3ZjWs49");
const balance = await connection.getBalance(address);
const balanceInSol = balance / LAMPORTS_PER_SOL;

console.log(
  `\nThe balance of the account at ${address} is ${balance} lamports\n`
);

console.log(`That's ${balanceInSol} SOL!\n`);

console.log(`✅ Finished!`);
