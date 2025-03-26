import { g as createComponent, h as createAstro, i as renderTemplate, m as maybeRenderHead, j as addAttribute, k as renderComponent, l as renderHead, n as renderSlot } from '../chunks/astro/server_DO-K2bh7.mjs';
/* empty css                                 */
import { p as push, a as pop } from '../chunks/_@astro-renderers_Cv9TCZCj.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_Cv9TCZCj.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';

const astroLogo = new Proxy({"src":"/_astro/astro.Dm8K3lV8.svg","width":115,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/GitHub/sdp-org/src/assets/astro.svg";
							}
							
							return target[name];
						}
					});

const background = new Proxy({"src":"/_astro/background.BPKAcmfN.svg","width":1440,"height":1024,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/GitHub/sdp-org/src/assets/background.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$Welcome = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Welcome;
  return renderTemplate`${maybeRenderHead()}<div id="container" data-astro-cid-mmc7otgs> <img id="background"${addAttribute(background.src, "src")} alt="" fetchpriority="high" data-astro-cid-mmc7otgs> <main data-astro-cid-mmc7otgs> <section id="hero" data-astro-cid-mmc7otgs> <a href="https://astro.build" data-astro-cid-mmc7otgs><img${addAttribute(astroLogo.src, "src")} width="115" height="48" alt="Astro Homepage" data-astro-cid-mmc7otgs></a> <h1 data-astro-cid-mmc7otgs>
To get started, open the <code data-astro-cid-mmc7otgs><pre data-astro-cid-mmc7otgs>src/pages</pre></code> directory in your project.
</h1> <div data-astro-cid-mmc7otgs> <h1 class="text-3xl font-extrabold" data-astro-cid-mmc7otgs>tailwindcss test</h1> </div> <section id="links" data-astro-cid-mmc7otgs> <a class="button" href="https://docs.astro.build" data-astro-cid-mmc7otgs>Read our docs</a> <a href="https://astro.build/chat" data-astro-cid-mmc7otgs>Join our Discord <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" data-astro-cid-mmc7otgs><path fill="currentColor" d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.11 0A72.37 72.37 0 0 0 45.64 0a105.89 105.89 0 0 0-26.25 8.09C2.79 32.65-1.71 56.6.54 80.21a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.11 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.66 2a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1 105.25 105.25 0 0 0 32.19-16.14c2.64-27.38-4.51-51.11-18.9-72.15ZM42.45 65.69C36.18 65.69 31 60 31 53s5-12.74 11.43-12.74S54 46 53.89 53s-5.05 12.69-11.44 12.69Zm42.24 0C78.41 65.69 73.25 60 73.25 53s5-12.74 11.44-12.74S96.23 46 96.12 53s-5.04 12.69-11.43 12.69Z" data-astro-cid-mmc7otgs></path></svg> </a> </section> </section> </main> <a href="https://astro.build/blog/astro-5/" id="news" class="box" data-astro-cid-mmc7otgs> <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-mmc7otgs><path d="M24.667 12c1.333 1.414 2 3.192 2 5.334 0 4.62-4.934 5.7-7.334 12C18.444 28.567 18 27.456 18 26c0-4.642 6.667-7.053 6.667-14Zm-5.334-5.333c1.6 1.65 2.4 3.43 2.4 5.333 0 6.602-8.06 7.59-6.4 17.334C13.111 27.787 12 25.564 12 22.666c0-4.434 7.333-8 7.333-16Zm-6-5.333C15.111 3.555 16 5.556 16 7.333c0 8.333-11.333 10.962-5.333 22-3.488-.774-6-4-6-8 0-8.667 8.666-10 8.666-20Z" fill="#111827" data-astro-cid-mmc7otgs></path></svg> <h2 data-astro-cid-mmc7otgs>What's New in Astro 5.0?</h2> <p data-astro-cid-mmc7otgs>
From content layers to server islands, click to learn more about the new features and
			improvements in Astro 5.0
</p> </a> </div> `;
}, "D:/GitHub/sdp-org/src/components/Welcome.astro", void 0);

function DesktopMenu($$payload) {

	$$payload.out += `<ul class="menu menu-horizontal px-1"><div class="dropdown dropdown-hover"><div tabindex="0" role="button" class="btn btn-ghost m-1 text-xl">最新消息▼</div> <ul class="dropdown-content z-[1] menu p-2 shadow-sm bg-base-100 rounded-box w-52"><li><a href="/news/press">新聞稿</a></li> <li><a href="/news/events">活動資訊</a></li> <li><a href="/news/issues">議題發言</a></li> <li><a href="/news/clarification">闢謠專區</a></li></ul></div> <div class="dropdown dropdown-hover"><div tabindex="0" role="button" class="btn btn-ghost m-1 text-xl">關於社民黨▼</div> <ul class="dropdown-content z-[1] menu p-2 shadow-sm bg-base-100 rounded-box w-52"><li><a href="/about">簡介</a></li> <li><a href="/about/team">組織團隊</a></li> <li><a href="/about/officials">黨公職</a></li> <li><a href="/about/documents">黨務文件</a></li> <li><a href="/about/finance">財報公開專區</a></li></ul></div></ul>`;
}

function MobileMenu($$payload, $$props) {
	push();

	$$payload.out += `<button class="btn btn-square btn-ghost" aria-label="Toggle menu"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button> `;

	{
		$$payload.out += '<!--[!-->';
	}

	$$payload.out += `<!--]-->`;
	pop();
}

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="navbar bg-base-100"> <!-- 手機版選單按鈕（左側） --> <div class="navbar-start md:hidden"> ${renderComponent($$result, "MobileMenu", MobileMenu, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/GitHub/sdp-org/src/components/navbar/MobileMenu.svelte", "client:component-export": "default" })} </div> <!-- 桌面版左側 --> <div class="navbar-start hidden md:flex"> ${renderComponent($$result, "DesktopMenu", DesktopMenu, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/GitHub/sdp-org/src/components/navbar/DesktopMenu.svelte", "client:component-export": "default" })} </div> <!-- Logo居中 --> <div class="navbar-center relative"> <a href="/" class="normal-case text-xl logo-container"> <img src="/logo.svg" alt="社會民主黨" class="h-12 lg:h-16 primary-logo"> <img src="/logo-font.svg" alt="社會民主黨" class="h-12 md:h-16 logo secondary-logo absolute"> </a> </div> <!-- 桌面版右側 --> <div class="navbar-end hidden md:flex"> <a href="/join" class="btn btn-primary">加入我們</a> <a href="/donate" class="btn btn-secondary ml-2">捐款支持</a> </div> </nav>`;
}, "D:/GitHub/sdp-org/src/components/Navbar.astro", void 0);

function FacebookIcon() {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 25", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("title", { children: "Facebook" }),
    /* @__PURE__ */ jsx("path", { d: "M12 2.54c5.523 0 10 4.476 10 10 0 4.99-3.657 9.127-8.437 9.878V15.43h2.33l.443-2.89-2.773-.001v-1.922c.015-.774.411-1.515 1.63-1.515h1.26V6.64s-1.144-.196-2.238-.196c-2.249 0-3.73 1.342-3.776 3.774l-.002.117v2.203H7.899v2.89h2.54v6.988C5.657 21.667 2 17.53 2 12.54c0-5.523 4.477-10 10-10", fill: "#FFF" })
  ] });
}

function InstagramIcon() {
  return /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", xmlnsXlink: "http://www.w3.org/1999/xlink", children: [
    /* @__PURE__ */ jsx("title", { children: "Instagram" }),
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("path", { id: "a", fill: "#fff", d: "M8.6672 12c0-1.8409 1.4919-3.3336 3.3328-3.3336S15.3336 10.1591 15.3336 12 13.8409 15.3336 12 15.3336 8.6672 13.8409 8.6672 12m-1.802 0c0 2.836 2.2988 5.1349 5.1348 5.1349S17.1349 14.836 17.1349 12 14.836 6.8651 12 6.8651 6.8651 9.164 6.8651 12m9.273-5.3385a1.2004 1.2004 0 0 0 1.4336 1.1775 1.1995 1.1995 0 0 0 .9432-.9424 1.2 1.2 0 0 0-.5098-1.2321 1.2 1.2 0 0 0-.6666-.2025h-.0004a1.2005 1.2005 0 0 0-1.2 1.1995M7.96 20.1398c-.975-.0444-1.5049-.2068-1.857-.344-.467-.1818-.8-.3983-1.1503-.748-.3502-.3498-.567-.6826-.748-1.1495-.1373-.352-.2997-.8821-.344-1.857-.0485-1.0541-.0581-1.3707-.0581-4.0412s.0104-2.9863.0581-4.0412c.0444-.975.208-1.504.344-1.857.1818-.467.3983-.8.748-1.1503.3498-.3502.6826-.567 1.1503-.748.352-.1373.882-.2997 1.857-.344 1.054-.0485 1.3707-.0582 4.04-.0582s2.9862.0105 4.0412.0582c.975.0444 1.504.208 1.857.344.4669.181.8.3982 1.1503.748.3502.3498.5662.6834.748 1.1502.1373.352.2997.8821.344 1.857.0485 1.055.0581 1.3708.0581 4.0413s-.0096 2.9862-.0581 4.0412c-.0444.9749-.2076 1.5049-.344 1.857-.1818.4669-.3983.8-.748 1.1495s-.6834.5662-1.1503.748c-.352.1372-.882.2996-1.857.344-1.0541.0484-1.3707.0581-4.0412.0581s-2.9862-.0097-4.04-.0581M7.8772 2.0606c-1.0646.0484-1.792.2172-2.4273.4644-.6579.2553-1.2149.5978-1.7714 1.1535S2.7803 4.792 2.525 5.4499c-.2472.6357-.416 1.3627-.4644 2.4273C2.0113 8.9434 2 9.2843 2 12s.0113 3.0566.0606 4.1228c.0484 1.0646.2172 1.7916.4644 2.4273.2553.6575.597 1.216 1.1535 1.7714s1.1135.8975 1.7714 1.1535c.6365.2472 1.3627.416 2.4273.4644C8.944 21.9879 9.2843 22 12 22s3.0566-.0113 4.1228-.0606c1.0646-.0484 1.7916-.2172 2.4273-.4644.6575-.256 1.2149-.5978 1.7714-1.1535s.8975-1.1139 1.1535-1.7714c.2472-.6357.4168-1.3627.4644-2.4273.0485-1.067.0598-1.4071.0598-4.1228s-.0113-3.0566-.0598-4.1228c-.0484-1.0646-.2172-1.792-.4644-2.4273-.256-.6575-.5978-1.2149-1.1535-1.7714s-1.1139-.8982-1.7706-1.1535c-.6365-.2472-1.3635-.4168-2.4273-.4644C15.0574 2.012 14.7165 2 12.0008 2s-3.0568.0113-4.1236.0606" }) }),
    /* @__PURE__ */ jsx("use", { href: "#a" }),
    /* @__PURE__ */ jsx("use", { href: "#a" })
  ] });
}

function Youtube() {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("title", { children: "Youtube" }),
    /* @__PURE__ */ jsx("path", { d: "M21.58 7.2a2.5 2.5 0 0 0-1.77-1.78C18.26 5 12 5 12 5s-6.26 0-7.8.42c-.88.23-1.55.9-1.78 1.77C2 8.77 2 12 2 12s0 3.26.42 4.8c.23.88.9 1.55 1.77 1.78C5.74 19 12 19 12 19s6.26 0 7.8-.42c.88-.23 1.55-.9 1.78-1.77C22 15.26 22 12 22 12s0-3.23-.42-4.8M10 15V9l5.2 3z", fill: "#fff" })
  ] });
}

function ThreadsIcon() {
  return /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", children: [
    /* @__PURE__ */ jsx("title", { children: "Threads" }),
    /* @__PURE__ */ jsx("path", { d: "M331.5 235.7c2.2.9 4.2 1.9 6.3 2.8 29.2 14.1 50.6 35.2 61.8 61.4 15.7 36.5 17.2 95.8-30.3 143.2-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2-32.3-41-48.9-98.1-49.5-169.6v-.5c.5-71.5 17.1-128.6 49.4-169.6 36.3-46.1 90.3-69.7 160.5-70.2h.3c70.3.5 124.9 24 162.3 69.9 18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4-29.2-35.8-73-54.2-130.5-54.6-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3 28 35.6 71.2 53.9 128.2 54.4 51.4-.4 85.4-12.6 113.7-40.9 32.3-32.2 31.7-71.8 21.4-95.9-6.1-14.2-17.1-26-31.9-34.9-3.7 26.9-11.8 48.3-24.7 64.8-17.1 21.8-41.4 33.6-72.7 35.3-23.6 1.3-46.3-4.4-63.9-16-20.8-13.8-33-34.8-34.3-59.3-2.5-48.3 35.7-83 95.2-86.4 21.1-1.2 40.9-.3 59.2 2.8-2.4-14.8-7.3-26.6-14.6-35.2-10-11.7-25.6-17.7-46.2-17.8h-.7c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6.4 99.9 39.5 103.7 107.7l-.2.2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3 25.6-1.4 54.6-11.4 59.5-73.2-13.2-2.9-27.8-4.4-43.4-4.4-4.8 0-9.6.1-14.4.4-42.9 2.4-57.2 23.2-56.2 41.8z", fill: "#fff" })
  ] });
}

function LineIcon() {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("title", { children: "Line" }),
    /* @__PURE__ */ jsx("path", { d: "M22 10.6222c0-4.4838-4.5161-8.1613-10-8.1613S2 6.1061 2 10.6222c0 4 3.5484 7.3549 8.3548 8 .3226.0323.7742.2258.871.4839.0968.2258.0323.6452.0323.9032 0 0-.1291.742-.1291.871-.0322.2258-.1935 1 .871.4839 1.0323-.4516 5.7419-3.4194 7.871-5.8065C21.3226 14.0093 22 12.3964 22 10.6222M8.4516 12.9771c0 .0967-.0968.1935-.1935.1935H5.4516c-.0323 0-.0968-.0322-.129-.0322-.0323-.0323-.0323-.0968-.0323-.1291v-4.387c0-.0968.0968-.1936.1936-.1936h.6774c.0968 0 .1935.0968.1935.1935v3.4516h1.9033c.0967 0 .1935.0968.1935.1936zm1.6774 0c0 .0967-.0967.1935-.1935.1935H9.258c-.0968 0-.1936-.0968-.1936-.1935V8.6222c0-.0967.0968-.1935.1936-.1935h.6774c.0968 0 .1935.0968.1935.1935zm4.871 0c0 .0967-.0968.1935-.1935.1935h-.7097c-.0323 0-.0323-.0322-.0323-.0322L12 10.4287v2.5806c0 .0968-.0968.1936-.1935.1936h-.6775c-.0967 0-.1935-.0968-.1935-.1936V8.6545c0-.0968.0968-.1936.1935-.1936h.6775l.0322.0323 2 2.6774V8.59c0-.0968.0968-.1936.1936-.1936h.7742c.0967 0 .1935.0968.1935.1936zm3.871-3.6452c0 .0968-.0968.1936-.1936.1936h-1.9032v.7419h1.9032c.0968 0 .1936.0968.1936.1935v.6775c0 .0967-.0968.1935-.1936.1935h-1.9032v.6774h1.9032c.0968 0 .1936.0968.1936.1936v.6774c0 .0968-.0968.1935-.1936.1935H15.871c-.0323 0-.0968-.0322-.1291-.0322-.0322-.0323-.0322-.0968-.0322-.129V8.5577c0-.0322.0322-.0968.0322-.129.0323-.0323.0968-.0323.1291-.0323h2.8064c.0968 0 .1936.0968.1936.1936z", fill: "#fff" })
  ] });
}

function LogoZone() {
  return /* @__PURE__ */ jsxs("aside", { className: "items-center sm:flex", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center mb-4", children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/footer-logo.min.svg", alt: "社會民主黨", className: "h-32" }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col  mb-4", children: [
      /* @__PURE__ */ jsx("span", { className: "footer-title", children: "支持社民 一同前進" }),
      /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", "stroke-width": "1.5", className: "w-5 h-5", children: [
          /* @__PURE__ */ jsx("path", { d: "M15.3 2c.42 0 .76.34.76.75v.17c.75.19 1.3.87 1.3 1.67a.75.75 0 0 1-1.5 0q-.02-.2-.23-.22h-.4a.48.48 0 0 0-.16.93l1 .38a1.98 1.98 0 0 1-.01 3.72v.23a.75.75 0 0 1-1.5 0v-.17a1.7 1.7 0 0 1-1.3-1.67.75.75 0 0 1 1.5 0q.02.21.22.23h.4a.48.48 0 0 0 .17-.94l-1-.37a1.98 1.98 0 0 1 0-3.72v-.24c0-.41.34-.75.76-.75", fill: "#FFF" }),
          /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M19.43 11.08a1.58 1.58 0 0 1 2.22 2.22l-3.86 4.82a2 2 0 0 1-1.55.75h-6.17a1 1 0 0 0-.5.2l-.53.47c.1.32-.03.7-.34.87L6.12 21.9a.75.75 0 0 1-1.02-.27l-3-5.2a.75.75 0 0 1 .28-1.02l2.57-1.5a.8.8 0 0 1 .75 0l1.69-1.35a3.3 3.3 0 0 1 2.02-.75c.82 0 2.1.07 3.27.5h2.6c.65 0 1.23.35 1.54.89zM8.56 17.95l-.27.24-1.75-3.03 1.78-1.43q.54-.41 1.1-.42c.77 0 1.88.07 2.8.43q.18.06.37.06h2.68a.29.29 0 0 1 .23.47l-.07.06-.03.02-.13.03h-2.73a.75.75 0 0 0 0 1.5h2.73c.49 0 .93-.2 1.25-.5l3.85-3.13a.08.08 0 0 1 .11.1l-3.87 4.84a.5.5 0 0 1-.37.18h-6.17c-.56 0-1.1.2-1.51.58m-4.79-1.62 2.25 3.9 1.28-.74-2.25-3.9z", fill: "#FFF" })
        ] }),
        /* @__PURE__ */ jsx("a", { href: "/donate", className: "link link-hover", children: "捐款支持社民黨" })
      ] }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", "stroke-width": "1.5", className: "w-5 h-5", children: [
          /* @__PURE__ */ jsx("path", { d: "M21 16h2v2h-2zM9 16h8v2H9zm12-4h2v2h-2zM9 12h8v2H9zm0-4h14v2H9z", fill: "#FFF" }),
          /* @__PURE__ */ jsx("path", { d: "M25 2H7a2 2 0 0 0-2 2v25a1 1 0 0 0 1 1h1a1 1 0 0 0 .8-.4l2.2-3 2.2 3a1 1 0 0 0 1.6 0l2.2-3 2.2 3a1 1 0 0 0 1.6 0l2.2-3 2.2 3a1 1 0 0 0 .8.4h1a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2m0 25.3-2.2-2.9a1 1 0 0 0-1.6 0l-2.2 3-2.2-3a1 1 0 0 0-1.6 0l-2.2 3-2.2-3a1 1 0 0 0-1.6 0l-2.2 3V4h18Z", fill: "#FFF" }),
          /* @__PURE__ */ jsx("path", { "data-name": "<Transparent Rectangle>", fill: "none", d: "M0 0h32v32H0z" })
        ] }),
        "愛心碼：0329"
      ] })
    ] })
  ] });
}

function Footer() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("link", { rel: "stylesheet", href: "./node_modules/lineicons/dist/lineicons.css" }),
    /* @__PURE__ */ jsxs("footer", { className: "footer lg:footer-horizontal text-white p-10", id: "footer-color", children: [
      /* @__PURE__ */ jsx(LogoZone, {}),
      /* @__PURE__ */ jsxs("nav", { children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h6", { className: "footer-title", children: "最新消息" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 text-white", children: [
          /* @__PURE__ */ jsx("a", { href: "/news/press", className: "link link-hover", children: "新聞稿" }),
          /* @__PURE__ */ jsx("a", { href: "/news/events", className: "link link-hover", children: "活動資訊" }),
          /* @__PURE__ */ jsx("a", { href: "/news/issues", className: "link link-hover", children: "議題發言" }),
          /* @__PURE__ */ jsx("a", { href: "/news/clarification", className: "link link-hover", children: "闢謠專區" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("nav", { children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h6", { className: "footer-title", children: "關於社民黨" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 text-white", children: [
          /* @__PURE__ */ jsx("a", { href: "/about", className: "link link-hover", children: "簡介" }),
          /* @__PURE__ */ jsx("a", { href: "/about/team", className: "link link-hover", children: "組織團隊" }),
          /* @__PURE__ */ jsx("a", { href: "/about/officials", className: "link link-hover", children: "黨公職" }),
          /* @__PURE__ */ jsx("a", { href: "/about/documents", className: "link link-hover", children: "黨務文件" }),
          /* @__PURE__ */ jsx("a", { href: "/about/finance", className: "link link-hover", children: "財報公開專區" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer-end", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "footer-title", children: "聯絡我們" }),
          /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: "currentColor", className: "w-5 h-5", children: /* @__PURE__ */ jsx("path", { d: "M21.51 5.77a2.25 2.25 0 0 0-2.88-2.88l-14 5.1a2.25 2.25 0 0 0-.07 4.2l5.17 2.07q.3.12.41.42l2.07 5.16a2.25 2.25 0 0 0 4.2-.07z", fill: "#fff" }) }),
            "台北市中山區林森北路100號8樓之4"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: "currentColor", className: "w-5 h-5", children: /* @__PURE__ */ jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" }) }),
            "sdparty.tw@gmail.com"
          ] })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "footer-title mt-4", children: "社群媒體" }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx("a", { href: "https://facebook.com/sdparty.tw", className: "btn btn-circle btn-ghost", children: /* @__PURE__ */ jsx(FacebookIcon, {}) }),
          /* @__PURE__ */ jsx("a", { href: "https://instagram.com", className: "btn btn-circle btn-ghost", children: /* @__PURE__ */ jsx(InstagramIcon, {}) }),
          /* @__PURE__ */ jsx("a", { href: "https://youtube.com", className: "btn btn-circle btn-ghost", children: /* @__PURE__ */ jsx(Youtube, {}) }),
          /* @__PURE__ */ jsx("a", { href: "https://threads.com", className: "btn btn-circle btn-ghost", children: /* @__PURE__ */ jsx(ThreadsIcon, {}) }),
          /* @__PURE__ */ jsx("a", { href: "https://threads.com", className: "btn btn-circle btn-ghost", children: /* @__PURE__ */ jsx(LineIcon, {}) })
        ] })
      ] })
    ] })
  ] });
}

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro Basics</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", Footer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/GitHub/sdp-org/src/components/Footer.tsx", "client:component-export": "default", "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "D:/GitHub/sdp-org/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Welcome", $$Welcome, {})} ` })}`;
}, "D:/GitHub/sdp-org/src/pages/index.astro", void 0);

const $$file = "D:/GitHub/sdp-org/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
