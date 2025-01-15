// docs/.vitepress/config/index.ts
import { defineConfig } from "file:///D:/Code/Vue/undraw-ui/node_modules/.pnpm/vitepress@1.0.0-alpha.72_@algolia+client-search@5.6.1_@types+node@16.4.7_sass@1.49.7_search-i_2fqlt45rzotdaifssnf5fmjwvq/node_modules/vitepress/dist/node/index.js";

// docs/.vitepress/plugins.ts
import MarkdownIt from "file:///D:/Code/Vue/undraw-ui/node_modules/.pnpm/markdown-it@12.3.2/node_modules/markdown-it/index.js";
import mdContainer from "file:///D:/Code/Vue/undraw-ui/node_modules/.pnpm/markdown-it-container@3.0.0/node_modules/markdown-it-container/index.js";
import { resolve } from "path";
import fs from "fs";
var markdown = MarkdownIt();
var mdPlugin = (md) => {
  md.use(mdContainer, "demo", {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/);
    },
    render(tokens, idx) {
      var _a;
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
      if (tokens[idx].nesting === 1) {
        const description = m && m.length > 1 ? m[1] : "";
        const sourcePathToken = tokens[idx + 2];
        const sourcePath = ((_a = sourcePathToken.children) == null ? void 0 : _a[0].content) ?? "";
        let source = fs.readFileSync(
          resolve("docs/examples/", `${sourcePath}.vue`),
          "utf-8"
        );
        return `
          <Demo source="${encodeURIComponent(
          source
        )}" path="${sourcePath}" description="${encodeURIComponent(
          markdown.render(description)
        )}">`;
      } else {
        return "</Demo>";
      }
    }
  });
};

// docs/.vitepress/config/zh.ts
var zhConfig = {
  title: "undraw-ui",
  description: "a Vue 3 based component library for designers and developers",
  head: [
    ["link", { rel: "icon", href: "/undraw-ui/u.webp" }]
  ],
  themeConfig: {
    logo: "/u.webp",
    socialLinks: [
      { icon: "github", link: "https://github.com/readpage/undraw-ui" }
    ],
    outline: {
      label: "\u672C\u9875\u5185\u5BB9"
    },
    docFooter: {
      prev: "\u4E0A\u4E00\u9875",
      next: "\u4E0B\u4E00\u9875"
    },
    nav: [
      {
        text: "\u6307\u5357",
        link: "/guide/introduce"
      },
      {
        text: "\u7EC4\u4EF6",
        link: "/components/fold"
      },
      {
        text: "\u66F4\u65B0\u65E5\u5FD7",
        link: "/update/doc"
      },
      {
        text: "\u{1F496}\u652F\u6301",
        link: "/other/support"
      },
      {
        text: "gitee\u26A1\uFE0F",
        link: "https://gitee.com/undraw/undraw-ui"
      }
    ],
    sidebar: {
      "/guide/": [
        {
          text: "\u6307\u5357",
          items: [
            {
              text: "\u4ECB\u7ECD",
              link: "/guide/introduce"
            },
            {
              text: "\u5B89\u88C5",
              link: "/guide/install"
            },
            {
              text: "\u4F7F\u7528",
              link: "/guide/usage"
            },
            {
              text: "\u56FD\u9645\u5316",
              link: "/guide/i18n"
            }
          ]
        }
      ],
      "/components/": [
        {
          text: "\u7EC4\u4EF6",
          items: [
            {
              text: "Fold \u6298\u53E0",
              link: "/components/fold"
            },
            {
              text: "Comment \u8BC4\u8BBA",
              link: "/components/comment"
            },
            {
              text: "Anchor \u951A\u70B9",
              link: "/components/anchor"
            },
            {
              text: "Search \u641C\u7D22",
              link: "/components/search"
            },
            {
              text: "Chat \u804A\u5929",
              link: "/components/chat"
            },
            {
              text: "Form \u8868\u5355",
              link: "/components/form"
            },
            {
              text: "Table \u8868\u683C",
              link: "/components/table"
            },
            {
              text: "Crud \u8868\u683C\u7684\u589E\u5220\u6539\u67E5",
              link: "/components/crud"
            },
            {
              text: "Counter \u6EDA\u52A8\u6570\u5B57",
              link: "/components/counter"
            },
            {
              text: "NoticeBar \u901A\u77E5\u680F",
              link: "/components/notice-bar"
            },
            {
              text: "Divider \u5206\u5272\u7EBF",
              link: "/components/divider"
            },
            {
              text: "Icon \u56FE\u6807",
              link: "/components/icon"
            },
            {
              text: "Editor \u7F16\u8F91\u5668",
              link: "/components/editor"
            },
            {
              text: "Dialog \u5BF9\u8BDD\u6846",
              link: "/components/dialog"
            },
            {
              text: "Toast \u5410\u53F8",
              link: "/components/toast"
            }
          ]
        }
      ]
    }
  }
};

// docs/.vitepress/config/index.ts
var config_default = defineConfig({
  base: "/undraw-ui",
  lang: "zh-CN",
  ...zhConfig,
  lastUpdated: true,
  markdown: {
    config: (md) => mdPlugin(md)
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy9pbmRleC50cyIsICJkb2NzLy52aXRlcHJlc3MvcGx1Z2lucy50cyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlnL3poLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcQ29kZVxcXFxWdWVcXFxcdW5kcmF3LXVpXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXENvZGVcXFxcVnVlXFxcXHVuZHJhdy11aVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXFxcXGluZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Db2RlL1Z1ZS91bmRyYXctdWkvZG9jcy8udml0ZXByZXNzL2NvbmZpZy9pbmRleC50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcclxuaW1wb3J0IHsgbWRQbHVnaW4gfSBmcm9tICcuLi9wbHVnaW5zJ1xyXG5pbXBvcnQgeyB6aENvbmZpZyB9IGZyb20gJy4vemgnXHJcblxyXG4vLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL3NpdGUtY29uZmlnXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgYmFzZTogJy91bmRyYXctdWknLFxyXG4gIGxhbmc6ICd6aC1DTicsXHJcbiAgLi4uemhDb25maWcsXHJcbiAgbGFzdFVwZGF0ZWQ6IHRydWUsXHJcbiAgbWFya2Rvd246IHtcclxuICAgIGNvbmZpZzogKG1kKSA9PiBtZFBsdWdpbihtZClcclxuICB9XHJcbn0pXHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcQ29kZVxcXFxWdWVcXFxcdW5kcmF3LXVpXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcQ29kZVxcXFxWdWVcXFxcdW5kcmF3LXVpXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxwbHVnaW5zLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Db2RlL1Z1ZS91bmRyYXctdWkvZG9jcy8udml0ZXByZXNzL3BsdWdpbnMudHNcIjtpbXBvcnQgTWFya2Rvd25JdCBmcm9tIFwibWFya2Rvd24taXRcIjtcclxuaW1wb3J0IHR5cGUgVG9rZW4gZnJvbSBcIm1hcmtkb3duLWl0L2xpYi90b2tlblwiO1xyXG5pbXBvcnQgbWRDb250YWluZXIgZnJvbSBcIm1hcmtkb3duLWl0LWNvbnRhaW5lclwiO1xyXG5pbXBvcnQgdHlwZSBSZW5kZXJlciBmcm9tIFwibWFya2Rvd24taXQvbGliL3JlbmRlcmVyXCI7XHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcblxyXG5pbnRlcmZhY2UgQ29udGFpbmVyQXBpIHtcclxuICBtYXJrZXI/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgdmFsaWRhdGU/KHBhcmFtczogc3RyaW5nKTogYm9vbGVhbjtcclxuICByZW5kZXI/KFxyXG4gICAgdG9rZW5zOiBUb2tlbltdLFxyXG4gICAgaW5kZXg6IG51bWJlcixcclxuICAgIG9wdGlvbnM6IGFueSxcclxuICAgIGVudjogYW55LFxyXG4gICAgc2VsZjogUmVuZGVyZXJcclxuICApOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IG1hcmtkb3duID0gTWFya2Rvd25JdCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1kUGx1Z2luID0gKG1kOiBNYXJrZG93bkl0KSA9PiB7XHJcbiAgbWQudXNlKG1kQ29udGFpbmVyLCBcImRlbW9cIiwge1xyXG4gICAgdmFsaWRhdGUocGFyYW1zKSB7XHJcbiAgICAgIC8vIFx1OUE4Q1x1OEJDMVx1NEVFM1x1NzgwMVx1NTc1N1x1NEUzQSA6OjpkZW1vOjo6XHU2MjREXHU4RkRCXHU4ODRDXHU2RTMyXHU2N0QzXHJcbiAgICAgIHJldHVybiAhIXBhcmFtcy50cmltKCkubWF0Y2goL15kZW1vXFxzKiguKikkLyk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyKHRva2VucywgaWR4KSB7XHJcbiAgICAgIGNvbnN0IG0gPSB0b2tlbnNbaWR4XS5pbmZvLnRyaW0oKS5tYXRjaCgvXmRlbW9cXHMqKC4qKSQvKTtcclxuICAgICAgaWYgKHRva2Vuc1tpZHhdLm5lc3RpbmcgPT09IDEgLyogXHU4ODY4XHU3OTNBXHU2ODA3XHU3QjdFXHU2QjYzXHU1NzI4XHU2MjUzXHU1RjAwICovKSB7XHJcbiAgICAgICAgLy8gXHU4M0I3XHU1M0Q2XHU3QjJDXHU0RTAwXHU4ODRDXHU3Njg0XHU1MTg1XHU1QkI5XHU0RjdGXHU3NTI4bWFya2Rvd25cdTZFMzJcdTY3RDNodG1sXHU0RjVDXHU0RTNBXHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBtICYmIG0ubGVuZ3RoID4gMSA/IG1bMV0gOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IHNvdXJjZVBhdGhUb2tlbiA9IHRva2Vuc1tpZHggKyAyXTtcclxuICAgICAgICBjb25zdCBzb3VyY2VQYXRoID0gc291cmNlUGF0aFRva2VuLmNoaWxkcmVuPy5bMF0uY29udGVudCA/PyBcIlwiO1xyXG4gICAgICAgIGxldCBzb3VyY2UgPSBmcy5yZWFkRmlsZVN5bmMoXHJcbiAgICAgICAgICByZXNvbHZlKFwiZG9jcy9leGFtcGxlcy9cIiwgYCR7c291cmNlUGF0aH0udnVlYCksXHJcbiAgICAgICAgICBcInV0Zi04XCJcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICA8RGVtbyBzb3VyY2U9XCIke2VuY29kZVVSSUNvbXBvbmVudChcclxuICAgICAgICAgICAgc291cmNlXHJcbiAgICAgICAgICApfVwiIHBhdGg9XCIke3NvdXJjZVBhdGh9XCIgZGVzY3JpcHRpb249XCIke2VuY29kZVVSSUNvbXBvbmVudChcclxuICAgICAgICAgIG1hcmtkb3duLnJlbmRlcihkZXNjcmlwdGlvbilcclxuICAgICAgICApfVwiPmA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFwiPC9EZW1vPlwiO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0gYXMgQ29udGFpbmVyQXBpKTtcclxufTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxDb2RlXFxcXFZ1ZVxcXFx1bmRyYXctdWlcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcQ29kZVxcXFxWdWVcXFxcdW5kcmF3LXVpXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcXFxcemgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0NvZGUvVnVlL3VuZHJhdy11aS9kb2NzLy52aXRlcHJlc3MvY29uZmlnL3poLnRzXCI7aW1wb3J0IHR5cGUgeyBEZWZhdWx0VGhlbWUsIExvY2FsZVNwZWNpZmljQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHpoQ29uZmlnOiBMb2NhbGVTcGVjaWZpY0NvbmZpZzxEZWZhdWx0VGhlbWUuQ29uZmlnPiA9IHtcclxuICB0aXRsZTogXCJ1bmRyYXctdWlcIixcclxuICBkZXNjcmlwdGlvbjogXCJhIFZ1ZSAzIGJhc2VkIGNvbXBvbmVudCBsaWJyYXJ5IGZvciBkZXNpZ25lcnMgYW5kIGRldmVsb3BlcnNcIixcclxuICBoZWFkOiBbXHJcbiAgICBbJ2xpbmsnLCB7IHJlbDogJ2ljb24nLCBocmVmOiAnL3VuZHJhdy11aS91LndlYnAnfV1cclxuICBdLFxyXG4gIFxyXG5cclxuICB0aGVtZUNvbmZpZzoge1xyXG4gICAgbG9nbzogJy91LndlYnAnLFxyXG5cclxuICAgIHNvY2lhbExpbmtzOiBbXHJcbiAgICAgIHsgaWNvbjogJ2dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vcmVhZHBhZ2UvdW5kcmF3LXVpJyB9XHJcbiAgICBdLFxyXG4gICAgXHJcbiAgICBvdXRsaW5lOiB7XHJcbiAgICAgIGxhYmVsOiAnXHU2NzJDXHU5ODc1XHU1MTg1XHU1QkI5JyxcclxuICAgIH0sXHJcblxyXG4gICAgZG9jRm9vdGVyOiB7XHJcbiAgICAgIHByZXY6ICdcdTRFMEFcdTRFMDBcdTk4NzUnLFxyXG4gICAgICBuZXh0OiAnXHU0RTBCXHU0RTAwXHU5ODc1JyxcclxuICAgIH0sXHJcblxyXG4gICAgbmF2OiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnXHU2MzA3XHU1MzU3JyxcclxuICAgICAgICBsaW5rOiAnL2d1aWRlL2ludHJvZHVjZSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdcdTdFQzRcdTRFRjYnLFxyXG4gICAgICAgIGxpbms6ICcvY29tcG9uZW50cy9mb2xkJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ1x1NjZGNFx1NjVCMFx1NjVFNVx1NUZENycsXHJcbiAgICAgICAgbGluazogJy91cGRhdGUvZG9jJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ1x1RDgzRFx1REM5Nlx1NjUyRlx1NjMwMScsXHJcbiAgICAgICAgbGluazogJy9vdGhlci9zdXBwb3J0J1xyXG4gICAgICB9LFxyXG4gICAgICB7IFxyXG4gICAgICAgIHRleHQ6ICdnaXRlZVx1MjZBMVx1RkUwRicsIFxyXG4gICAgICAgIGxpbms6ICdodHRwczovL2dpdGVlLmNvbS91bmRyYXcvdW5kcmF3LXVpJ1xyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIHNpZGViYXI6IHtcclxuICAgICAgJy9ndWlkZS8nOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ1x1NjMwN1x1NTM1NycsXHJcbiAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogJ1x1NEVDQlx1N0VDRCcsXHJcbiAgICAgICAgICAgICAgbGluazogJy9ndWlkZS9pbnRyb2R1Y2UnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiAnXHU1Qjg5XHU4OEM1JyxcclxuICAgICAgICAgICAgICBsaW5rOiAnL2d1aWRlL2luc3RhbGwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiAnXHU0RjdGXHU3NTI4JyxcclxuICAgICAgICAgICAgICBsaW5rOiAnL2d1aWRlL3VzYWdlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogJ1x1NTZGRFx1OTY0NVx1NTMxNicsXHJcbiAgICAgICAgICAgICAgbGluazogJy9ndWlkZS9pMThuJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgJy9jb21wb25lbnRzLyc6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnXHU3RUM0XHU0RUY2JyxcclxuICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIkZvbGQgXHU2Mjk4XHU1M0UwXCIsXHJcbiAgICAgICAgICAgICAgbGluazogJy9jb21wb25lbnRzL2ZvbGQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIkNvbW1lbnQgXHU4QkM0XHU4QkJBXCIsXHJcbiAgICAgICAgICAgICAgbGluazogJy9jb21wb25lbnRzL2NvbW1lbnQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiAnQW5jaG9yIFx1OTUxQVx1NzBCOScsXHJcbiAgICAgICAgICAgICAgbGluazogJy9jb21wb25lbnRzL2FuY2hvcidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6ICdTZWFyY2ggXHU2NDFDXHU3RDIyJyxcclxuICAgICAgICAgICAgICBsaW5rOiAnL2NvbXBvbmVudHMvc2VhcmNoJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogJ0NoYXQgXHU4MDRBXHU1OTI5JyxcclxuICAgICAgICAgICAgICBsaW5rOiAnL2NvbXBvbmVudHMvY2hhdCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6ICdGb3JtIFx1ODg2OFx1NTM1NScsXHJcbiAgICAgICAgICAgICAgbGluazogJy9jb21wb25lbnRzL2Zvcm0nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiAnVGFibGUgXHU4ODY4XHU2ODNDJyxcclxuICAgICAgICAgICAgICBsaW5rOiAnL2NvbXBvbmVudHMvdGFibGUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiAnQ3J1ZCBcdTg4NjhcdTY4M0NcdTc2ODRcdTU4OUVcdTUyMjBcdTY1MzlcdTY3RTUnLFxyXG4gICAgICAgICAgICAgIGxpbms6ICcvY29tcG9uZW50cy9jcnVkJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogJ0NvdW50ZXIgXHU2RURBXHU1MkE4XHU2NTcwXHU1QjU3JyxcclxuICAgICAgICAgICAgICBsaW5rOiAnL2NvbXBvbmVudHMvY291bnRlcidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6ICdOb3RpY2VCYXIgXHU5MDFBXHU3N0U1XHU2ODBGJyxcclxuICAgICAgICAgICAgICBsaW5rOiAnL2NvbXBvbmVudHMvbm90aWNlLWJhcidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiRGl2aWRlciBcdTUyMDZcdTUyNzJcdTdFQkZcIixcclxuICAgICAgICAgICAgICBsaW5rOiAnL2NvbXBvbmVudHMvZGl2aWRlcidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiSWNvbiBcdTU2RkVcdTY4MDdcIixcclxuICAgICAgICAgICAgICBsaW5rOiAnL2NvbXBvbmVudHMvaWNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiRWRpdG9yIFx1N0YxNlx1OEY5MVx1NTY2OFwiLFxyXG4gICAgICAgICAgICAgIGxpbms6ICcvY29tcG9uZW50cy9lZGl0b3InXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIkRpYWxvZyBcdTVCRjlcdThCRERcdTY4NDZcIixcclxuICAgICAgICAgICAgICBsaW5rOiAnL2NvbXBvbmVudHMvZGlhbG9nJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJUb2FzdCBcdTU0MTBcdTUzRjhcIixcclxuICAgICAgICAgICAgICBsaW5rOiAnL2NvbXBvbmVudHMvdG9hc3QnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG5cclxuICB9LFxyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1QsU0FBUyxvQkFBb0I7OztBQ0FoRCxPQUFPLGdCQUFnQjtBQUU1VCxPQUFPLGlCQUFpQjtBQUV4QixTQUFTLGVBQWU7QUFDeEIsT0FBTyxRQUFRO0FBY2YsSUFBTSxXQUFXLFdBQVc7QUFFckIsSUFBTSxXQUFXLENBQUMsT0FBbUI7QUFDMUMsS0FBRyxJQUFJLGFBQWEsUUFBUTtBQUFBLElBQzFCLFNBQVMsUUFBUTtBQUVmLGFBQU8sQ0FBQyxDQUFDLE9BQU8sS0FBSyxFQUFFLE1BQU0sZUFBZTtBQUFBLElBQzlDO0FBQUEsSUFDQSxPQUFPLFFBQVEsS0FBSztBQTNCeEI7QUE0Qk0sWUFBTSxJQUFJLE9BQU8sR0FBRyxFQUFFLEtBQUssS0FBSyxFQUFFLE1BQU0sZUFBZTtBQUN2RCxVQUFJLE9BQU8sR0FBRyxFQUFFLFlBQVksR0FBa0I7QUFFNUMsY0FBTSxjQUFjLEtBQUssRUFBRSxTQUFTLElBQUksRUFBRSxDQUFDLElBQUk7QUFDL0MsY0FBTSxrQkFBa0IsT0FBTyxNQUFNLENBQUM7QUFDdEMsY0FBTSxlQUFhLHFCQUFnQixhQUFoQixtQkFBMkIsR0FBRyxZQUFXO0FBQzVELFlBQUksU0FBUyxHQUFHO0FBQUEsVUFDZCxRQUFRLGtCQUFrQixHQUFHLFVBQVUsTUFBTTtBQUFBLFVBQzdDO0FBQUEsUUFDRjtBQUNBLGVBQU87QUFBQSwwQkFDVztBQUFBLFVBQ2Q7QUFBQSxRQUNGLENBQUMsV0FBVyxVQUFVLGtCQUFrQjtBQUFBLFVBQ3hDLFNBQVMsT0FBTyxXQUFXO0FBQUEsUUFDN0IsQ0FBQztBQUFBLE1BQ0gsT0FBTztBQUNMLGVBQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBLEVBQ0YsQ0FBaUI7QUFDbkI7OztBQy9DTyxJQUFNLFdBQXNEO0FBQUEsRUFDakUsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsTUFBTTtBQUFBLElBQ0os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
