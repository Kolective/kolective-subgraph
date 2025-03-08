import { ponder } from "ponder:registry";
import { createHash } from "crypto";
import {
  Swap,
  Transfer,
} from "ponder:schema";

ponder.on("Core:Swap", async ({ event, context }) => {
  const id = createHash("sha256")
    .update(`${event.transaction.hash}-${event.args.tokenIn}-${event.args.tokenOut}-${event.args.amountIn}-${event.args.amountOut}-${event.args.buyPrice}-${event.args.sellPrice}`)
    .digest("hex");

  await context.db
    .insert(Swap)
    .values({
      id: id,
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
  const id = createHash("sha256")
    .update(`${event.transaction.hash}-${event.args.from}-${event.args.to}-${event.args.value}`)
    .digest("hex");

  await context.db
    .insert(Transfer)
    .values({
      id: id,
      from: event.args.from,
      to: event.args.to,
      value: event.args.value.toString(),
      blockNumber: event.block.number.toString(),
      blockTimestamp: event.block.timestamp.toString(),
      transactionHash: event.transaction.hash,
    });
});

ponder.on("ETH:Transfer", async ({ event, context }) => {
  const id = createHash("sha256")
    .update(`${event.transaction.hash}-${event.args.from}-${event.args.to}-${event.args.value}`)
    .digest("hex");

  await context.db
    .insert(Transfer)
    .values({
      id: id,
      from: event.args.from,
      to: event.args.to,
      value: event.args.value.toString(),
      blockNumber: event.block.number.toString(),
      blockTimestamp: event.block.timestamp.toString(),
      transactionHash: event.transaction.hash,
    });
});

ponder.on("BTC:Transfer", async ({ event, context }) => {
  const id = createHash("sha256")
    .update(`${event.transaction.hash}-${event.args.from}-${event.args.to}-${event.args.value}`)
    .digest("hex");

  await context.db
    .insert(Transfer)
    .values({
      id: id,
      from: event.args.from,
      to: event.args.to,
      value: event.args.value.toString(),
      blockNumber: event.block.number.toString(),
      blockTimestamp: event.block.timestamp.toString(),
      transactionHash: event.transaction.hash,
    });
});

ponder.on("WETH:Transfer", async ({ event, context }) => {
  const id = createHash("sha256")
    .update(`${event.transaction.hash}-${event.args.from}-${event.args.to}-${event.args.value}`)
    .digest("hex");

  await context.db
    .insert(Transfer)
    .values({
      id: id,
      from: event.args.from,
      to: event.args.to,
      value: event.args.value.toString(),
      blockNumber: event.block.number.toString(),
      blockTimestamp: event.block.timestamp.toString(),
      transactionHash: event.transaction.hash,
    });
});

ponder.on("PEPE:Transfer", async ({ event, context }) => {
  const id = createHash("sha256")
    .update(`${event.transaction.hash}-${event.args.from}-${event.args.to}-${event.args.value}`)
    .digest("hex");

  await context.db
    .insert(Transfer)
    .values({
      id: id,
      from: event.args.from,
      to: event.args.to,
      value: event.args.value.toString(),
      blockNumber: event.block.number.toString(),
      blockTimestamp: event.block.timestamp.toString(),
      transactionHash: event.transaction.hash,
    });
});

ponder.on("TRUMP:Transfer", async ({ event, context }) => {
  const id = createHash("sha256")
    .update(`${event.transaction.hash}-${event.args.from}-${event.args.to}-${event.args.value}`)
    .digest("hex");

  await context.db
    .insert(Transfer)
    .values({
      id: id,
      from: event.args.from,
      to: event.args.to,
      value: event.args.value.toString(),
      blockNumber: event.block.number.toString(),
      blockTimestamp: event.block.timestamp.toString(),
      transactionHash: event.transaction.hash,
    });
});

ponder.on("DOGEAI:Transfer", async ({ event, context }) => {
  const id = createHash("sha256")
    .update(`${event.transaction.hash}-${event.args.from}-${event.args.to}-${event.args.value}`)
    .digest("hex");

  await context.db
    .insert(Transfer)
    .values({
      id: id,
      from: event.args.from,
      to: event.args.to,
      value: event.args.value.toString(),
      blockNumber: event.block.number.toString(),
      blockTimestamp: event.block.timestamp.toString(),
      transactionHash: event.transaction.hash,
    });
});

ponder.on("WIF:Transfer", async ({ event, context }) => {
  const id = createHash("sha256")
    .update(`${event.transaction.hash}-${event.args.from}-${event.args.to}-${event.args.value}`)
    .digest("hex");

  await context.db
    .insert(Transfer)
    .values({
      id: id,
      from: event.args.from,
      to: event.args.to,
      value: event.args.value.toString(),
      blockNumber: event.block.number.toString(),
      blockTimestamp: event.block.timestamp.toString(),
      transactionHash: event.transaction.hash,
    });
});

ponder.on("STONKS:Transfer", async ({ event, context }) => {
  const id = createHash("sha256")
    .update(`${event.transaction.hash}-${event.args.from}-${event.args.to}-${event.args.value}`)
    .digest("hex");

  await context.db
    .insert(Transfer)
    .values({
      id: id,
      from: event.args.from,
      to: event.args.to,
      value: event.args.value.toString(),
      blockNumber: event.block.number.toString(),
      blockTimestamp: event.block.timestamp.toString(),
      transactionHash: event.transaction.hash,
    });
});