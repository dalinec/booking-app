import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { db } from "@/server/db";

export const createContext = async (opts: CreateNextContextOptions) => {
  const { req, res } = opts;
  return {
    req,
    res,
    db,
  };
};

export type Context = Awaited<ReturnType<typeof createContext>>;
