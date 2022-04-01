import React, { createContext } from "react";

type PageContext = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export const PageContext = createContext<PageContext | null>(null);
