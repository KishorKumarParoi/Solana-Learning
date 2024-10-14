import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

async function checkBalance(
  publicKeyString: string,
  suppliedKeyString?: string
) {
  try {
    const publicKey = new PublicKey(publicKeyString);
    const connection = new Connection("https://api.devnet.solana.com");
    const balance = await connection.getBalance(publicKey);
    const balanceInSol = balance / LAMPORTS_PER_SOL;
    console.log(
      `\nThe balance of the account at ${publicKey} is ${balance} lamports\n`
    );
    console.log(`That's ${balanceInSol} SOL!\n`);

    if (suppliedKeyString) {
      const suppliedKey = new PublicKey(suppliedKeyString);
      const balance = await connection.getBalance(suppliedKey);
      const balanceInSol = balance / LAMPORTS_PER_SOL;
      console.log(
        `\nThe balance of the account at ${suppliedKey} is ${balance} lamports\n`
      );
      console.log(`That's ${balanceInSol} SOL!\n`);
    }

    console.log(`✅ Finished!`);
  } catch (err) {
    console.error("Error: Invalid public key - ${publicKeyString}");
  }
}

// Run the function
checkBalance(
  "JDjsHewXMA68XcEc5QD7xJpazusS9WEcDUaap3ZjWs49",
  "JDjsHewXDA68XcEc5QD7xJpazusS9WEcDUaap3ZjWs49"
);
