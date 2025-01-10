import moment from "moment";
import {setup} from "@storybook/vue3";
import {withThemeByClassName} from "@storybook/addon-themes";

import "../src/scss/vendor.scss";
import "../src/scss/ks-theme-light.scss";
import "../src/scss/ks-theme-dark.scss";
import "./app.scss";

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName({
        themes: {
            light: "light",
            dark: "dark",
        },
        defaultTheme: "light",
    }),
  ]
};

setup((app) => {
  app.config.globalProperties.$moment = moment;
})

export default preview;
