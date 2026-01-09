// vite.config.js
import VueI18nPlugin from "file:///C:/Users/Usuario/Documents/GitHub/citapick/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import vue from "file:///C:/Users/Usuario/Documents/GitHub/citapick/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///C:/Users/Usuario/Documents/GitHub/citapick/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import laravel from "file:///C:/Users/Usuario/Documents/GitHub/citapick/node_modules/laravel-vite-plugin/dist/index.js";
import {
  fileURLToPath
} from "node:url";
import AutoImport from "file:///C:/Users/Usuario/Documents/GitHub/citapick/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/Users/Usuario/Documents/GitHub/citapick/node_modules/unplugin-vue-components/dist/vite.js";
import {
  VueRouterAutoImports,
  getPascalCaseRouteName
} from "file:///C:/Users/Usuario/Documents/GitHub/citapick/node_modules/unplugin-vue-router/dist/index.mjs";
import VueRouter from "file:///C:/Users/Usuario/Documents/GitHub/citapick/node_modules/unplugin-vue-router/dist/vite.mjs";
import {
  defineConfig
} from "file:///C:/Users/Usuario/Documents/GitHub/citapick/node_modules/vite/dist/node/index.js";
import VueDevTools from "file:///C:/Users/Usuario/Documents/GitHub/citapick/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import Layouts from "file:///C:/Users/Usuario/Documents/GitHub/citapick/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import vuetify from "file:///C:/Users/Usuario/Documents/GitHub/citapick/node_modules/vite-plugin-vuetify/dist/index.mjs";
import svgLoader from "file:///C:/Users/Usuario/Documents/GitHub/citapick/node_modules/vite-svg-loader/index.js";
var __vite_injected_original_import_meta_url = "file:///C:/Users/Usuario/Documents/GitHub/citapick/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    laravel({
      input: ["src/main.js"],
      refresh: true
    }),
    // Docs: https://github.com/posva/unplugin-vue-router
    // ℹ️ This plugin should be placed before vue plugin
    VueRouter({
      getRouteName: (routeNode) => {
        return getPascalCaseRouteName(routeNode).replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
      },
      beforeWriteFiles: (root) => {
        root.insert("/apps/email/:filter", "/src/pages/apps/email/index.vue");
        root.insert("/apps/email/:label", "/src/pages/apps/email/index.vue");
      }
    }),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === "swiper-container" || tag === "swiper-slide"
        }
      }
    }),
    VueDevTools(),
    vueJsx(),
    // Docs: https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin
    vuetify({
      styles: {
        configFile: "src/assets/styles/variables/_vuetify.scss"
      }
    }),
    // Docs: https://github.com/johncampionjr/vite-plugin-vue-layouts#vite-plugin-vue-layouts
    Layouts({
      layoutsDirs: "./src/layouts/"
    }),
    // Docs: https://github.com/antfu/unplugin-vue-components#unplugin-vue-components
    Components({
      dirs: ["src/@core/components", "src/views/demos", "src/components"],
      dts: true,
      resolvers: [
        (componentName) => {
          if (componentName === "VueApexCharts")
            return {
              name: "default",
              from: "vue3-apexcharts",
              as: "VueApexCharts"
            };
        }
      ]
    }),
    // Docs: https://github.com/antfu/unplugin-auto-import#unplugin-auto-import
    AutoImport({
      imports: ["vue", VueRouterAutoImports, "@vueuse/core", "@vueuse/math", "vue-i18n", "pinia"],
      dirs: [
        "./src/@core/utils",
        "./src/@core/composable/",
        "./src/composables/",
        "./src/utils/",
        "./src/plugins/*/composables/*"
      ],
      vueTemplate: true,
      // ℹ️ Disabled to avoid confusion & accidental usage
      ignore: ["useCookies", "useStorage"],
      eslintrc: {
        enabled: true,
        filepath: "./.eslintrc-auto-import.json"
      }
    }),
    // Docs: https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n#intlifyunplugin-vue-i18n
    VueI18nPlugin({
      runtimeOnly: true,
      compositionOnly: true,
      include: [
        fileURLToPath(new URL(
          "./src/plugins/i18n/locales/**",
          __vite_injected_original_import_meta_url
        ))
      ]
    }),
    svgLoader()
  ],
  define: {
    "process.env": {}
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL(
        "./src",
        __vite_injected_original_import_meta_url
      )),
      "@themeConfig": fileURLToPath(new URL(
        "./themeConfig.js",
        __vite_injected_original_import_meta_url
      )),
      "@core": fileURLToPath(new URL(
        "./src/@core",
        __vite_injected_original_import_meta_url
      )),
      "@store": fileURLToPath(new URL(
        "./src/@store",
        __vite_injected_original_import_meta_url
      )),
      "@layouts": fileURLToPath(new URL(
        "./src/@layouts",
        __vite_injected_original_import_meta_url
      )),
      "@images": fileURLToPath(new URL(
        "./src/assets/images/",
        __vite_injected_original_import_meta_url
      )),
      "@styles": fileURLToPath(new URL(
        "./src/assets/styles/",
        __vite_injected_original_import_meta_url
      )),
      "@configured-variables": fileURLToPath(new URL(
        "./src/assets/styles/variables/_template.scss",
        __vite_injected_original_import_meta_url
      )),
      "@db": fileURLToPath(new URL(
        "./src/plugins/fake-api/handlers/",
        __vite_injected_original_import_meta_url
      )),
      "@api-utils": fileURLToPath(new URL(
        "./src/plugins/fake-api/utils/",
        __vite_injected_original_import_meta_url
      ))
    }
  },
  build: {
    chunkSizeWarningLimit: 5e3
  },
  optimizeDeps: {
    exclude: ["vuetify"],
    entries: [
      "./src/**/*.vue"
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVc3VhcmlvXFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcY2l0YXBpY2tcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFVzdWFyaW9cXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxjaXRhcGlja1xcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvVXN1YXJpby9Eb2N1bWVudHMvR2l0SHViL2NpdGFwaWNrL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IFZ1ZUkxOG5QbHVnaW4gZnJvbSAnQGludGxpZnkvdW5wbHVnaW4tdnVlLWkxOG4vdml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xuaW1wb3J0IGxhcmF2ZWwgZnJvbSBcImxhcmF2ZWwtdml0ZS1wbHVnaW5cIlxuaW1wb3J0IHtcbiAgICBmaWxlVVJMVG9QYXRoXG59IGZyb20gJ25vZGU6dXJsJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQge1xuICAgIFZ1ZVJvdXRlckF1dG9JbXBvcnRzLFxuICAgIGdldFBhc2NhbENhc2VSb3V0ZU5hbWVcbn0gZnJvbSAndW5wbHVnaW4tdnVlLXJvdXRlcidcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndW5wbHVnaW4tdnVlLXJvdXRlci92aXRlJ1xuaW1wb3J0IHtcbiAgICBkZWZpbmVDb25maWdcbn0gZnJvbSAndml0ZSdcbmltcG9ydCBWdWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnXG5pbXBvcnQgTGF5b3V0cyBmcm9tICd2aXRlLXBsdWdpbi12dWUtbGF5b3V0cydcbmltcG9ydCB2dWV0aWZ5IGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZXRpZnknXG5pbXBvcnQgc3ZnTG9hZGVyIGZyb20gJ3ZpdGUtc3ZnLWxvYWRlcidcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgcGx1Z2luczogW1xuICAgICAgICBsYXJhdmVsKHtcbiAgICAgICAgICAgIGlucHV0OiBbXCJzcmMvbWFpbi5qc1wiXSxcbiAgICAgICAgICAgIHJlZnJlc2g6IHRydWUsXG4gICAgICAgIH0pLFxuICAgICAgICAvLyBEb2NzOiBodHRwczovL2dpdGh1Yi5jb20vcG9zdmEvdW5wbHVnaW4tdnVlLXJvdXRlclxuICAgICAgICAvLyBcdTIxMzlcdUZFMEYgVGhpcyBwbHVnaW4gc2hvdWxkIGJlIHBsYWNlZCBiZWZvcmUgdnVlIHBsdWdpblxuICAgICAgICBWdWVSb3V0ZXIoe1xuICAgICAgICAgICAgZ2V0Um91dGVOYW1lOiByb3V0ZU5vZGUgPT4ge1xuICAgICAgICAgICAgICAgIC8vIENvbnZlcnQgcGFzY2FsIGNhc2UgdG8ga2ViYWIgY2FzZVxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRQYXNjYWxDYXNlUm91dGVOYW1lKHJvdXRlTm9kZSlcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyhbYS16MC05XSkoW0EtWl0pL2csICckMS0kMicpXG4gICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmVmb3JlV3JpdGVGaWxlczogcm9vdCA9PiB7XG4gICAgICAgICAgICAgICAgcm9vdC5pbnNlcnQoJy9hcHBzL2VtYWlsLzpmaWx0ZXInLCAnL3NyYy9wYWdlcy9hcHBzL2VtYWlsL2luZGV4LnZ1ZScpXG4gICAgICAgICAgICAgICAgcm9vdC5pbnNlcnQoJy9hcHBzL2VtYWlsLzpsYWJlbCcsICcvc3JjL3BhZ2VzL2FwcHMvZW1haWwvaW5kZXgudnVlJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgICB2dWUoe1xuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBjb21waWxlck9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaXNDdXN0b21FbGVtZW50OiB0YWcgPT4gdGFnID09PSAnc3dpcGVyLWNvbnRhaW5lcicgfHwgdGFnID09PSAnc3dpcGVyLXNsaWRlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICAgIFZ1ZURldlRvb2xzKCksXG4gICAgICAgIHZ1ZUpzeCgpLFxuXG4gICAgICAgIC8vIERvY3M6IGh0dHBzOi8vZ2l0aHViLmNvbS92dWV0aWZ5anMvdnVldGlmeS1sb2FkZXIvdHJlZS9tYXN0ZXIvcGFja2FnZXMvdml0ZS1wbHVnaW5cbiAgICAgICAgdnVldGlmeSh7XG4gICAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgICAgICBjb25maWdGaWxlOiAnc3JjL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzL192dWV0aWZ5LnNjc3MnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSksXG5cbiAgICAgICAgLy8gRG9jczogaHR0cHM6Ly9naXRodWIuY29tL2pvaG5jYW1waW9uanIvdml0ZS1wbHVnaW4tdnVlLWxheW91dHMjdml0ZS1wbHVnaW4tdnVlLWxheW91dHNcbiAgICAgICAgTGF5b3V0cyh7XG4gICAgICAgICAgICBsYXlvdXRzRGlyczogJy4vc3JjL2xheW91dHMvJyxcbiAgICAgICAgfSksXG5cbiAgICAgICAgLy8gRG9jczogaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzI3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzXG4gICAgICAgIENvbXBvbmVudHMoe1xuICAgICAgICAgICAgZGlyczogWydzcmMvQGNvcmUvY29tcG9uZW50cycsICdzcmMvdmlld3MvZGVtb3MnLCAnc3JjL2NvbXBvbmVudHMnXSxcbiAgICAgICAgICAgIGR0czogdHJ1ZSxcbiAgICAgICAgICAgIHJlc29sdmVyczogW1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudE5hbWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBBdXRvIGltcG9ydCBgVnVlQXBleENoYXJ0c2BcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudE5hbWUgPT09ICdWdWVBcGV4Q2hhcnRzJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb206ICd2dWUzLWFwZXhjaGFydHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzOiAnVnVlQXBleENoYXJ0cydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSksXG5cbiAgICAgICAgLy8gRG9jczogaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLWF1dG8taW1wb3J0I3VucGx1Z2luLWF1dG8taW1wb3J0XG4gICAgICAgIEF1dG9JbXBvcnQoe1xuICAgICAgICAgICAgaW1wb3J0czogWyd2dWUnLCBWdWVSb3V0ZXJBdXRvSW1wb3J0cywgJ0B2dWV1c2UvY29yZScsICdAdnVldXNlL21hdGgnLCAndnVlLWkxOG4nLCAncGluaWEnXSxcbiAgICAgICAgICAgIGRpcnM6IFtcbiAgICAgICAgICAgICAgICAnLi9zcmMvQGNvcmUvdXRpbHMnLFxuICAgICAgICAgICAgICAgICcuL3NyYy9AY29yZS9jb21wb3NhYmxlLycsXG4gICAgICAgICAgICAgICAgJy4vc3JjL2NvbXBvc2FibGVzLycsXG4gICAgICAgICAgICAgICAgJy4vc3JjL3V0aWxzLycsXG4gICAgICAgICAgICAgICAgJy4vc3JjL3BsdWdpbnMvKi9jb21wb3NhYmxlcy8qJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB2dWVUZW1wbGF0ZTogdHJ1ZSxcblxuICAgICAgICAgICAgLy8gXHUyMTM5XHVGRTBGIERpc2FibGVkIHRvIGF2b2lkIGNvbmZ1c2lvbiAmIGFjY2lkZW50YWwgdXNhZ2VcbiAgICAgICAgICAgIGlnbm9yZTogWyd1c2VDb29raWVzJywgJ3VzZVN0b3JhZ2UnXSxcbiAgICAgICAgICAgIGVzbGludHJjOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBmaWxlcGF0aDogJy4vLmVzbGludHJjLWF1dG8taW1wb3J0Lmpzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSksXG5cbiAgICAgICAgLy8gRG9jczogaHR0cHM6Ly9naXRodWIuY29tL2ludGxpZnkvYnVuZGxlLXRvb2xzL3RyZWUvbWFpbi9wYWNrYWdlcy91bnBsdWdpbi12dWUtaTE4biNpbnRsaWZ5dW5wbHVnaW4tdnVlLWkxOG5cbiAgICAgICAgVnVlSTE4blBsdWdpbih7XG4gICAgICAgICAgICBydW50aW1lT25seTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbXBvc2l0aW9uT25seTogdHJ1ZSxcbiAgICAgICAgICAgIGluY2x1ZGU6IFtcbiAgICAgICAgICAgICAgICBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjL3BsdWdpbnMvaTE4bi9sb2NhbGVzLyoqJyxcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KSxcbiAgICAgICAgc3ZnTG9hZGVyKCksXG4gICAgXSxcbiAgICBkZWZpbmU6IHtcbiAgICAgICAgJ3Byb2Nlc3MuZW52Jzoge31cbiAgICB9LFxuICAgIHJlc29sdmU6IHtcbiAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsXG4gICAgICAgICAgICAgICAgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAgICAgICAnQHRoZW1lQ29uZmlnJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3RoZW1lQ29uZmlnLmpzJyxcbiAgICAgICAgICAgICAgICBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICAgICAgICdAY29yZSc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMvQGNvcmUnLFxuICAgICAgICAgICAgICAgIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgICAgICAgJ0BzdG9yZSc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMvQHN0b3JlJyxcbiAgICAgICAgICAgICAgICBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICAgICAgICdAbGF5b3V0cyc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMvQGxheW91dHMnLFxuICAgICAgICAgICAgICAgIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgICAgICAgJ0BpbWFnZXMnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjL2Fzc2V0cy9pbWFnZXMvJyxcbiAgICAgICAgICAgICAgICBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICAgICAgICdAc3R5bGVzJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYy9hc3NldHMvc3R5bGVzLycsXG4gICAgICAgICAgICAgICAgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAgICAgICAnQGNvbmZpZ3VyZWQtdmFyaWFibGVzJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy9fdGVtcGxhdGUuc2NzcycsXG4gICAgICAgICAgICAgICAgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAgICAgICAnQGRiJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYy9wbHVnaW5zL2Zha2UtYXBpL2hhbmRsZXJzLycsXG4gICAgICAgICAgICAgICAgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAgICAgICAnQGFwaS11dGlscyc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMvcGx1Z2lucy9mYWtlLWFwaS91dGlscy8nLFxuICAgICAgICAgICAgICAgIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgYnVpbGQ6IHtcbiAgICAgICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiA1MDAwLFxuICAgIH0sXG4gICAgb3B0aW1pemVEZXBzOiB7XG4gICAgICAgIGV4Y2x1ZGU6IFsndnVldGlmeSddLFxuICAgICAgICBlbnRyaWVzOiBbXG4gICAgICAgICAgICAnLi9zcmMvKiovKi52dWUnLFxuICAgICAgICBdLFxuICAgIH0sXG59KSJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFQsT0FBTyxtQkFBbUI7QUFDdFYsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGFBQWE7QUFDcEI7QUFBQSxFQUNJO0FBQUEsT0FDRztBQUNQLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCO0FBQUEsRUFDSTtBQUFBLEVBQ0E7QUFBQSxPQUNHO0FBQ1AsT0FBTyxlQUFlO0FBQ3RCO0FBQUEsRUFDSTtBQUFBLE9BQ0c7QUFDUCxPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGFBQWE7QUFDcEIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sZUFBZTtBQXBCaUwsSUFBTSwyQ0FBMkM7QUF1QnhQLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVM7QUFBQSxJQUNMLFFBQVE7QUFBQSxNQUNKLE9BQU8sQ0FBQyxhQUFhO0FBQUEsTUFDckIsU0FBUztBQUFBLElBQ2IsQ0FBQztBQUFBO0FBQUE7QUFBQSxJQUdELFVBQVU7QUFBQSxNQUNOLGNBQWMsZUFBYTtBQUV2QixlQUFPLHVCQUF1QixTQUFTLEVBQ2xDLFFBQVEsc0JBQXNCLE9BQU8sRUFDckMsWUFBWTtBQUFBLE1BQ3JCO0FBQUEsTUFDQSxrQkFBa0IsVUFBUTtBQUN0QixhQUFLLE9BQU8sdUJBQXVCLGlDQUFpQztBQUNwRSxhQUFLLE9BQU8sc0JBQXNCLGlDQUFpQztBQUFBLE1BQ3ZFO0FBQUEsSUFDSixDQUFDO0FBQUEsSUFDRCxJQUFJO0FBQUEsTUFDQSxVQUFVO0FBQUEsUUFDTixpQkFBaUI7QUFBQSxVQUNiLGlCQUFpQixTQUFPLFFBQVEsc0JBQXNCLFFBQVE7QUFBQSxRQUNsRTtBQUFBLE1BQ0o7QUFBQSxJQUNKLENBQUM7QUFBQSxJQUNELFlBQVk7QUFBQSxJQUNaLE9BQU87QUFBQTtBQUFBLElBR1AsUUFBUTtBQUFBLE1BQ0osUUFBUTtBQUFBLFFBQ0osWUFBWTtBQUFBLE1BQ2hCO0FBQUEsSUFDSixDQUFDO0FBQUE7QUFBQSxJQUdELFFBQVE7QUFBQSxNQUNKLGFBQWE7QUFBQSxJQUNqQixDQUFDO0FBQUE7QUFBQSxJQUdELFdBQVc7QUFBQSxNQUNQLE1BQU0sQ0FBQyx3QkFBd0IsbUJBQW1CLGdCQUFnQjtBQUFBLE1BQ2xFLEtBQUs7QUFBQSxNQUNMLFdBQVc7QUFBQSxRQUNQLG1CQUFpQjtBQUViLGNBQUksa0JBQWtCO0FBQ2xCLG1CQUFPO0FBQUEsY0FDSCxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsY0FDTixJQUFJO0FBQUEsWUFDUjtBQUFBLFFBQ1I7QUFBQSxNQUNKO0FBQUEsSUFDSixDQUFDO0FBQUE7QUFBQSxJQUdELFdBQVc7QUFBQSxNQUNQLFNBQVMsQ0FBQyxPQUFPLHNCQUFzQixnQkFBZ0IsZ0JBQWdCLFlBQVksT0FBTztBQUFBLE1BQzFGLE1BQU07QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0o7QUFBQSxNQUNBLGFBQWE7QUFBQTtBQUFBLE1BR2IsUUFBUSxDQUFDLGNBQWMsWUFBWTtBQUFBLE1BQ25DLFVBQVU7QUFBQSxRQUNOLFNBQVM7QUFBQSxRQUNULFVBQVU7QUFBQSxNQUNkO0FBQUEsSUFDSixDQUFDO0FBQUE7QUFBQSxJQUdELGNBQWM7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLGlCQUFpQjtBQUFBLE1BQ2pCLFNBQVM7QUFBQSxRQUNMLGNBQWMsSUFBSTtBQUFBLFVBQUk7QUFBQSxVQUNsQjtBQUFBLFFBQWUsQ0FBQztBQUFBLE1BQ3hCO0FBQUEsSUFDSixDQUFDO0FBQUEsSUFDRCxVQUFVO0FBQUEsRUFDZDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ0osZUFBZSxDQUFDO0FBQUEsRUFDcEI7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNILEtBQUssY0FBYyxJQUFJO0FBQUEsUUFBSTtBQUFBLFFBQ3ZCO0FBQUEsTUFBZSxDQUFDO0FBQUEsTUFDcEIsZ0JBQWdCLGNBQWMsSUFBSTtBQUFBLFFBQUk7QUFBQSxRQUNsQztBQUFBLE1BQWUsQ0FBQztBQUFBLE1BQ3BCLFNBQVMsY0FBYyxJQUFJO0FBQUEsUUFBSTtBQUFBLFFBQzNCO0FBQUEsTUFBZSxDQUFDO0FBQUEsTUFDcEIsVUFBVSxjQUFjLElBQUk7QUFBQSxRQUFJO0FBQUEsUUFDNUI7QUFBQSxNQUFlLENBQUM7QUFBQSxNQUNwQixZQUFZLGNBQWMsSUFBSTtBQUFBLFFBQUk7QUFBQSxRQUM5QjtBQUFBLE1BQWUsQ0FBQztBQUFBLE1BQ3BCLFdBQVcsY0FBYyxJQUFJO0FBQUEsUUFBSTtBQUFBLFFBQzdCO0FBQUEsTUFBZSxDQUFDO0FBQUEsTUFDcEIsV0FBVyxjQUFjLElBQUk7QUFBQSxRQUFJO0FBQUEsUUFDN0I7QUFBQSxNQUFlLENBQUM7QUFBQSxNQUNwQix5QkFBeUIsY0FBYyxJQUFJO0FBQUEsUUFBSTtBQUFBLFFBQzNDO0FBQUEsTUFBZSxDQUFDO0FBQUEsTUFDcEIsT0FBTyxjQUFjLElBQUk7QUFBQSxRQUFJO0FBQUEsUUFDekI7QUFBQSxNQUFlLENBQUM7QUFBQSxNQUNwQixjQUFjLGNBQWMsSUFBSTtBQUFBLFFBQUk7QUFBQSxRQUNoQztBQUFBLE1BQWUsQ0FBQztBQUFBLElBQ3hCO0FBQUEsRUFDSjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0gsdUJBQXVCO0FBQUEsRUFDM0I7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNWLFNBQVMsQ0FBQyxTQUFTO0FBQUEsSUFDbkIsU0FBUztBQUFBLE1BQ0w7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
