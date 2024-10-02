import { AssetQuery, HeroQuery } from "@/types";
import { contentGqlFetcher } from "./fetch";

export const getContentForHero = async () => {
  const query = `#graphql
    query HeroCollection {
        heroCollection {
            items {
            title
            subTitle
            preTitle
            callToActionCollection {
                    items {
                        link
                        text
                    }
                }
            }
        }
    }`;

  const data = await contentGqlFetcher<HeroQuery>({ query });
  if (!data) {
    throw Error("Opps no data");
  }
  return data;
};

export const getContentForLogos = async () => {
  const query = `#graphql
    query Asset($where: AssetFilter) {
        assetCollection(where: $where) {
                items {
                    width
                    url
                    title
                    height
                }
            }
        }
    `;

  const data = await contentGqlFetcher<AssetQuery>({
    query,
    variables: {
      where: {
        title_contains: "client",
      },
    },
  });

  if (!data) {
    throw Error("Opps no data");
  }
  return data;
};
