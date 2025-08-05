import { ponder } from "ponder:registry";
import { donation, balancerDonation } from "ponder:schema";

ponder.on("DerolasAuction:AuctionEnded", async ({ event, context }) => {
  // console.log("Auction ended.");
  // console.log(event.args);
});

ponder.on("DerolasAuction:DonationReceived", async ({ event, context }) => {
  await context.db
  .insert(donation)
  .values({ 
    donatorAddress: event.args.donatorAddress, 
    amount: event.args.amount,
    timestamp: event.block.timestamp,
    txnHash: event.transaction.hash
  })
});

ponder.on("DerolasAuction:EthDonatedToBalancer", async ({ event, context }) => {
  console.log("Eth donated to balancer.");
  console.log(event.args);
  await context.db
    .insert(balancerDonation)
    .values({ 
      amount: event.args.amount,
      timestamp: event.block.timestamp,
      txnHash: event.transaction.hash
    });
});

ponder.on("DerolasAuction:OwnerUpdated", async ({ event, context }) => {
  console.log("Ownership transferred.");
  console.log(event.args);
});
