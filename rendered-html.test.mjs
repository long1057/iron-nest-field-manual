import assert from "node:assert/strict";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the source-led home page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /IRON NEST Field Manual/);
  assert.match(html, /Operate the machine/);
  assert.match(html, /source-led/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview|react-loading-skeleton/);
});

test("renders guide and mission routes", async () => {
  const [guide, mission, wiki] = await Promise.all([
    render("/guides/elevation-calculator"),
    render("/missions/counter-battery"),
    render("/wiki"),
  ]);
  assert.equal(guide.status, 200);
  assert.equal(mission.status, 200);
  assert.equal(wiki.status, 200);
  assert.match(await guide.text(), /ballistic calculator/);
  assert.match(await mission.text(), /counter-battery/);
  assert.match(await wiki.text(), /evidence ledger/);
});

test("starter preview files are removed", async () => {
  await assert.rejects(import("node:fs/promises").then(({ access }) => access(new URL("app/_sites-preview/", templateRoot))));
});

