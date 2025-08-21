import {createRemToPxProcessor} from '@unocss/preset-wind4/utils'
import extractorSvelte from '@unocss/extractor-svelte'
import { defineConfig, presetWind4, presetTypography } from 'unocss'
import { presetDaisy } from '@ameinhardt/unocss-preset-daisy'

export default defineConfig({
  presets: [
    presetWind4({
        preflights: {
            reset: true,
            theme: {
                mode: 'on-demand',
                process: createRemToPxProcessor(),
            }
        }
    }),
    presetTypography() as any,
    presetDaisy()
  ],
  extractors: [
    extractorSvelte(),
  ],
  rules: [
    [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
  ],
  theme: {
    colors: {
      brand: '#1C1C19',      // Milo 深灰
      accent: '#D3AA70',     // Milo 金棕
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      display: ['Playfair Display', 'serif'],
    },
  }
})