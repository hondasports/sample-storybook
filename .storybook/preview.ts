import {type Preview, setup }  from "@storybook/vue3";

import '../src/assets/main.css'

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

setup((app) => {
  app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            cssLayer: {
                name: 'primevue',
                order: 'tailwind-base, primevue, tailwind-utilities'
            }
        }
    }
  });
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
