export type HeroQuery = {
  heroCollection: {
    items: {
      title: string;
      subTitle: string;
      preTitle: string;
      callToActionCollection: {
        items: {
          link: string;
          text: string;
        }[];
      };
    }[];
  };
};

export type AssetQuery = {
  assetCollection: {
    items: {
      width: number;
      url: string;
      title: string;
      height: number;
    }[];
  };
};
