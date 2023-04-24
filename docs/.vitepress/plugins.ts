import MarkdownIt from "markdown-it";
import type Token from "markdown-it/lib/token";
import mdContainer from "markdown-it-container";
import type Renderer from "markdown-it/lib/renderer";
import { resolve } from "path";
import fs from "fs";

interface ContainerApi {
  marker?: string | undefined;
  validate?(params: string): boolean;
  render?(
    tokens: Token[],
    index: number,
    options: any,
    env: any,
    self: Renderer
  ): string;
}

const markdown = MarkdownIt();

export const mdPlugin = (md: MarkdownIt) => {
  md.use(mdContainer, "demo", {
    validate(params) {
      // 验证代码块为 :::demo:::才进行渲染
      return !!params.trim().match(/^demo\s*(.*)$/);
    },
    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
      if (tokens[idx].nesting === 1 /* 表示标签正在打开 */) {
        // 获取第一行的内容使用markdown渲染html作为
        const description = m && m.length > 1 ? m[1] : "";
        const sourcePathToken = tokens[idx + 2];
        const sourcePath = sourcePathToken.children?.[0].content ?? "";
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
    },
  } as ContainerApi);
};
