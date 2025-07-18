import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

import PackageInfo from "../package.json";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: PackageInfo.name,
    brandUrl: PackageInfo.homepage,
  }),
});
