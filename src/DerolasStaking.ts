import { ponder } from "ponder:registry";

ponder.on("DerolasStaking:AuctionEnded", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("DerolasStaking:DonationReceived", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("DerolasStaking:EthDonatedToBalancer", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("DerolasStaking:OwnershipTransferred", async ({ event, context }) => {
  console.log(event.args);
});
