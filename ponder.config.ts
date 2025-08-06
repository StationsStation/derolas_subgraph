import { createConfig } from "ponder";

import { DerolasAuctionAbi } from "./abis/DerolasAuctionAbi";
import DerolasAuction from "./abis/DerolasAuction.json";

export default createConfig({
  chains: { base: { id: 8453, rpc: "https://gateway.tenderly.co/public/base" } },
  contracts: {
    DerolasAuction: {
      abi: DerolasAuctionAbi,
      address: DerolasAuction.address as '0x${string}',
      chain: "base",
      startBlock: 31682991,
    },
  },
});
