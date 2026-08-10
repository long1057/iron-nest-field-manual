# IRON NEST field manual

这是一个围绕 `IRON NEST` 首批搜索需求制作的 source-led 本地站点练习项目。
页面只发布来源能够支持的内容；Demo、正式版和待确认机制会明确分开。

当前本地站点包含：首页、Guides 导航、Gameplay、首次射击、战术地图、弹道计算器、
炮弹主题、多人核验、Demo walkthrough、Missions 和 Source room。

## 本地运行

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
npm install
npm run dev
npm run build
```

This starter does not use `wrangler.jsonc`.

## 项目结构

- `app/data.ts`：关键词、页面、来源和待确认队列
- `app/components/`：站点壳、卡片和文章页组件
- `app/guides/`、`app/missions/`、`app/wiki/`：导航和动态内页
- `tests/rendered-html.test.mjs`：渲染结果的最小验收测试
- `课程学习资料/作业/`：六关作业材料和截图不在本项目内，便于单独提交

## 内容边界

- 官方 Steam 页面优先支撑游戏定位和基础功能。
- 社区 Wiki、Reddit 和视频只用于发现问题或补充流程，不能替代版本核验。
- 任务名、按钮名、弹药清单、具体数值、Mods 和多人功能在没有当前版本证据时保持待确认。

## Optional Dispatch-Owned ChatGPT Sign-In

Import the ready-to-use helpers from `app/chatgpt-auth.ts` when the site needs
optional or required ChatGPT sign-in:

- Use `getChatGPTUser()` for optional signed-in UI.
- Use `requireChatGPTUser(returnTo)` for server-rendered pages that should send
  anonymous visitors through Sign in with ChatGPT.
- Use `chatGPTSignInPath(returnTo)` and `chatGPTSignOutPath(returnTo)` for
  browser links or actions.
- Pass a same-origin relative `returnTo` path for the destination after sign-in
  or sign-out. The helper validates and safely encodes it.
- Mark protected pages with `export const dynamic = "force-dynamic"` because
  they depend on per-request identity headers.

Dispatch owns `/signin-with-chatgpt`, `/signout-with-chatgpt`, `/callback`, the
OAuth cookies, and identity header injection. Do not implement app routes for
those reserved paths. Routes that do not import and call the helper remain
anonymous-compatible.

SIWC establishes identity only; it does not prove workspace membership. Use the
Sites hosting platform's access policy controls for workspace-wide restrictions,
or enforce explicit server-side membership or allowlist checks.

Use SIWC for account pages, user-specific dashboards, saved records, and write
actions tied to the current ChatGPT user. Leave public content anonymous.

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: verify the vinext build output
- `npm test`: build the starter and verify its rendered loading skeleton
- `npm run db:generate`: generate Drizzle migrations after schema changes

## Learn More

- [vinext Documentation](https://github.com/cloudflare/vinext)
- [Drizzle D1 Guide](https://orm.drizzle.team/docs/get-started/d1-new)
