import { onchainTable } from "ponder";

export const Swap = onchainTable("Swap", (t) => ({
  id: t.text().primaryKey(),
  sender: t.text(),
  tokenIn: t.text(),
  tokenOut: t.text(),
  amountIn: t.text(),
  amountOut: t.text(),
  buyPrice: t.text(),
  sellPrice: t.text(),
  blockNumber: t.text(),
  blockTimestamp: t.text(),
  transactionHash: t.text(),
}));

export const Transfer = onchainTable("Transfer", (t) => ({
  id: t.text().primaryKey(),
  from: t.text(),
  to: t.text(),
  value: t.text(),
  blockNumber: t.text(),
  blockTimestamp: t.text(),
  transactionHash: t.text(),
}));

export const PriceUpdated = onchainTable("PriceUpdated", (t) => ({
  id: t.text().primaryKey(),
  token: t.text(),
  newPrice: t.text(),
  newLiquidity: t.text(),
  blockNumber: t.text(),
  blockTimestamp: t.text(),
  transactionHash: t.text(),
}));
