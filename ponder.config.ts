import { createConfig } from "ponder";
import { http } from "viem";
import { CoreABI } from "./abis/CoreABI";
import { TokenABI } from "./abis/TokenABI";

export default createConfig({
  database: {
    kind: "postgres",
    connectionString: process.env.PONDER_DATABASE_URL,
  },
  networks: {
    sonicBlazeTestnet: {
      chainId: 57054,
      transport: http(process.env.PONDER_RPC_URL_1),
    },
  },
  contracts: {
    Core: {
      network: "sonicBlazeTestnet",
      abi: CoreABI,
      address: "0x5AB3A2CB16B21DCFaf91CDb83EC96698FaBe6A99",
      startBlock: 25125251,
    },
    SONIC: {
      network: "sonicBlazeTestnet",
      abi: TokenABI,
      address: "0xEA48745C8c9eFe2e27Cc939cC5c976A54285ad5b",
      startBlock: 25125251,
    },
    ETH: {
      network: "sonicBlazeTestnet",
      abi: TokenABI,
      address: "0x5ffac3827ddEE20b479d27a2b72c5a44FcD752DF",
      startBlock: 25125251,
    },
    BTC: {
      network: "sonicBlazeTestnet",
      abi: TokenABI,
      address: "0x3e2DA21A9Cc78C7401cAF4FaA85de092ED726833",
      startBlock: 25125251,
    },
    WETH: {
      network: "sonicBlazeTestnet",
      abi: TokenABI,
      address: "0x092eDa418B2f2fEeb86746206a8dA9c7a4c4Fa95",
      startBlock: 25125251,
    },
    PEPE: {
      network: "sonicBlazeTestnet",
      abi: TokenABI,
      address: "0xe66022A565E01A4Db313056e9f0D061A76020675",
      startBlock: 25125251,
    },
    TRUMP: {
      network: "sonicBlazeTestnet",
      abi: TokenABI,
      address: "0xb589fad21Abb69b2c7A6ADD0909038658e086cB9",
      startBlock: 25125251,
    },
    DOGEAI: {
      network: "sonicBlazeTestnet",
      abi: TokenABI,
      address: "0x50Ec6cC6ACF8784093E624C8949937C406F9F808",
      startBlock: 25125251,
    },
    WIF: {
      network: "sonicBlazeTestnet",
      abi: TokenABI,
      address: "0x6BB2620f3967c277B446E83d074767f18c4e1C58",
      startBlock: 25125251,
    },
    STONKS: {
      network: "sonicBlazeTestnet",
      abi: TokenABI,
      address: "0x6C45a072fAc0d9C08F5bf8f392818C5eb64afcFA",
      startBlock: 25125251,
    },
  },
});
