import { createConfig } from "ponder";

import { DerolasAuctionAbi } from "./abis/DerolasAuctionAbi";

export default createConfig({
  chains: { base: { id: 8453, rpc: "https://gateway.tenderly.co/public/base" } },
  contracts: {
    DerolasAuction: {
      abi: DerolasAuctionAbi,
      address: "0x2216ebB7f5f983b1D15713F90556edd56EB88DeE",
      chain: "base",
      startBlock: 31682991,
    },
  },
});
