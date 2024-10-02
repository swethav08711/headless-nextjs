import { getContentForLogos } from "@/content/queries";
import React from "react";
import Clients from "./clients";

export const LogoWall = async () => {
  const data = await getContentForLogos();

  return <Clients content={data.assetCollection.items} />;
};
