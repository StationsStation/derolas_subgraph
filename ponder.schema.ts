import { time } from "console";
import { onchainTable } from "ponder";

export const donation = onchainTable("donations", (t) => ({
  amount: t.bigint(),
  donatorAddress: t.text(),
  timestamp: t.bigint(),
  txnHash: t.text().primaryKey(),
}));


export const balancerDonation = onchainTable("balancer_donations", (t) => ({
  amount: t.bigint(),
  timestamp: t.bigint(),
  txnHash: t.text().primaryKey(),
}));