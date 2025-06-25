import { createConfig } from "ponder";

import { DerolasStakingAbi } from "./abis/DerolasStakingAbi";

export default createConfig({
  chains: { base: { id: 8453, rpc: "http(process.env.PONDER_RPC_URL_8453)" } },
  contracts: {
    DerolasStaking: {
      abi: DerolasStakingAbi,
      address: "0x35CAf83118d58504C179b50D538a095ac08Ebc8f",
      chain: "base",
      startBlock: 31682991,
    },
  },
});
