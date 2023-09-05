import vueSetupExtend from 'unplugin-vue-setup-extend-plus'
import type { UserConfigExport } from 'vite'
import svgLoader from 'vite-svg-loader'
import DefineOptions from 'unplugin-vue-define-options/vite';
export default (): UserConfigExport => {
  return {
    plugins: [
      svgLoader(),
      DefineOptions()
    ],
    optimizeDeps: {
      exclude: ['vitepress']
    },
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule): void => {
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              }
            }
          }
        ]
      }
    },
    server: {
      port: 9999
    }
  }
}
