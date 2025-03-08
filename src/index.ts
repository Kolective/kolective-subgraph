import { ponder } from "ponder:registry";

import {
  Swap,
  Transfer,
} from "ponder:schema";

ponder.on("Core:Swap", async ({ event, context }) => {
  await context.db
    .insert(Swap)
    .values({
      id: `${event.transaction.hash}-${event.log.logIndex}-${event.block.number}`,
      sender: event.args.sender,
      tokenIn: event.args.tokenIn,
      tokenOut: event.args.tokenOut,
      amountIn: event.args.amountIn.toString(),
      amountOut: event.args.amountOut.toString(),
      buyPrice: event.args.buyPrice.toString(),
      sellPrice: event.args.sellPrice.toString(),
      blockNumber: event.block.number.toString(),
      blockTimestamp: event.block.timestamp.toString(),
      transactionHash: event.transaction.hash,
    });
});

ponder.on("SONIC:Transfer", async ({ event, context }) => {
  await context.db
    .insert(Transfer)
    .values({
      id: `SONIC-${event.transaction.hash}-${event.log.logIndex}-${event.block.number}`,
      from: event.args.from,
      to: event.args.to,
      value: event.args.value.toString(),
      blockNumber: event.block.number.toString(),
      blockTimestamp: event.block.timestamp.toString(),
      transactionHash: event.transaction.hash,
    });
});

ponder.on("ETH:Transfer", async ({ event, context }) => {
  await context.db
    .insert(Transfer)
    .values({
      id: `ETH-${event.transaction.hash}-${event.log.logIndex}-${event.block.number}`,
      from: event.args.from,
      to: event.args.to,
      value: event.args.value.toString(),
      blockNumber: event.block.number.toString(),
      blockTimestamp: event.block.timestamp.toString(),
      transactionHash: event.transaction.hash,
    });
});

ponder.on("BTC:Transfer", async ({ event, context }) => {
  await context.db
    .insert(Transfer)
    .values({
      id: `BTC-${event.transaction.hash}-${event.log.logIndex}-${event.block.number}`,
      from: event.args.from,
      to: event.args.to,
      value: event.args.value.toString(),
      blockNumber: event.block.number.toString(),
      blockTimestamp: event.block.timestamp.toString(),
      transactionHash: event.transaction.hash,
    });
});

ponder.on("WETH:Transfer", async ({ event, context }) => {
  await context.db
    .insert(Transfer)
    .values({
      id: `WETH-${event.transaction.hash}-${event.log.logIndex}-${event.block.number}`,
      from: event.args.from,
      to: event.args.to,
      value: event.args.value.toString(),
      blockNumber: event.block.number.toString(),
      blockTimestamp: event.block.timestamp.toString(),
      transactionHash: event.transaction.hash,
    });
});

ponder.on("PEPE:Transfer", async ({ event, context }) => {
  await context.db
    .insert(Transfer)
    .values({
      id: `PEPE-${event.transaction.hash}-${event.log.logIndex}-${event.block.number}`,
      from: event.args.from,
      to: event.args.to,
      value: event.args.value.toString(),
      blockNumber: event.block.number.toString(),
      blockTimestamp: event.block.timestamp.toString(),
      transactionHash: event.transaction.hash,
    });
});

ponder.on("TRUMP:Transfer", async ({ event, context }) => {
  await context.db
    .insert(Transfer)
    .values({
      id: `TRUMP-${event.transaction.hash}-${event.log.logIndex}-${event.block.number}`,
      from: event.args.from,
      to: event.args.to,
      value: event.args.value.toString(),
      blockNumber: event.block.number.toString(),
      blockTimestamp: event.block.timestamp.toString(),
      transactionHash: event.transaction.hash,
    });
});

ponder.on("DOGEAI:Transfer", async ({ event, context }) => {
  await context.db
    .insert(Transfer)
    .values({
      id: `DOGEAI-${event.transaction.hash}-${event.log.logIndex}-${event.block.number}`,
      from: event.args.from,
      to: event.args.to,
      value: event.args.value.toString(),
      blockNumber: event.block.number.toString(),
      blockTimestamp: event.block.timestamp.toString(),
      transactionHash: event.transaction.hash,
    });
});

ponder.on("WIF:Transfer", async ({ event, context }) => {
  await context.db
    .insert(Transfer)
    .values({
      id: `WIF-${event.transaction.hash}-${event.log.logIndex}-${event.block.number}`,
      from: event.args.from,
      to: event.args.to,
      value: event.args.value.toString(),
      blockNumber: event.block.number.toString(),
      blockTimestamp: event.block.timestamp.toString(),
      transactionHash: event.transaction.hash,
    });
});

ponder.on("STONKS:Transfer", async ({ event, context }) => {
  await context.db
    .insert(Transfer)
    .values({
      id: `STONKS-${event.transaction.hash}-${event.log.logIndex}-${event.block.number}`,
      from: event.args.from,
      to: event.args.to,
      value: event.args.value.toString(),
      blockNumber: event.block.number.toString(),
      blockTimestamp: event.block.timestamp.toString(),
      transactionHash: event.transaction.hash,
    });
});