import { ponder } from "ponder:registry";

import {
  Swap,
  Transfer,
} from "ponder:schema";

const handleEvent = async (table: any, event: any, context: any, extraValues = {}) => {
  const uniqueId = `${event.transaction.hash}-${event.block.number}-${event.block.timestamp}`;
  
  await context.db.insert(table).values({
    id: uniqueId,
    blockNumber: event.block.number,
    blockTimestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
    ...extraValues,
  });
};

ponder.on("Core:Swap", async ({ event, context }) => {
  await handleEvent(Swap, event, context, {
    sender: event.args.sender,
    tokenIn: event.args.tokenIn,
    tokenOut: event.args.tokenOut,
    amountIn: event.args.amountIn.toString(),
    amountOut: event.args.amountOut.toString(),
    buyPrice: event.args.buyPrice.toString(),
    sellPrice: event.args.sellPrice.toString(),
  });
});

(["SONIC", "ETH", "BTC", "WETH", "PEPE", "TRUMP", "DOGEAI", "WIF", "STONKS"] as const).forEach(token => {
  ponder.on(`${token}:Transfer`, async ({ event, context }) => {
    await handleEvent(Transfer, event, context, {
      from: event.args.from,
      to: event.args.to,
      value: event.args.value.toString(),
    });
  });
});