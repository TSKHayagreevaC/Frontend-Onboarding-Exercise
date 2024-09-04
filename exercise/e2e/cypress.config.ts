import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run exercise-one:serve',
        production: 'nx run exercise-one:preview',
      },
      ciWebServerCommand: 'nx run exercise-one:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
