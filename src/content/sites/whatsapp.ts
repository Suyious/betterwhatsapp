import { observeAndRun } from "../../utils/dom"

const TOGGLE_CLASS = "betterwhatsapp-ui-hide-target";
const HEADING_SELECTOR = "span.x140p0ai.x1gufx9m.x1s928wv.xhkezso.x1gmr53x.x1cpjm7i.x1fgarty.x1943h6x.x193iq5w.xeuugli.x13faqbe.x1vvkbs.x1lliihq.x1fj9vlw.x14ug900.xcytdqz.x9u28bd.x1hx0egp.x579bpy.xjb2p0i.xo1l8bm.x1akz92t.x1ic7a3i";
const SUBHEADING_SELECTOR = "span.x140p0ai.x1gufx9m.x1s928wv.xhkezso.x1gmr53x.x1cpjm7i.x1fgarty.x1943h6x.x193iq5w.xeuugli.x13faqbe.x1vvkbs.x1lliihq.x1fj9vlw.xhslqc4.x14mdic9.x1hx0egp.x1jchvi3.xjb2p0i.xo1l8bm.x17mssa0.x1ic7a3i";
const CHATLISTITEM_SELECTOR = ".x10l6tqk.xh8yej3.x1g42fcv";

function updateText(class_name: string, text: string) {
	const span = document.querySelector(class_name) as HTMLElement | null;
  if (!span) return false;

	if(span.dataset.modified === "true") return true;
	span.innerText = text
	span.dataset.modified = "true"
  return true;
}

function toggleHiddenUI() {
	document.documentElement.classList.toggle(TOGGLE_CLASS);
}

function initWhatsapp() {
	console.log("[WHATSAPP] RUNNING")
	toggleHiddenUI();
	observeAndRun(() => updateText(HEADING_SELECTOR, "Never Download WhatsApp for Windows"), false);
	observeAndRun(() => updateText(SUBHEADING_SELECTOR, "Make calls, share your screen but get a slower experience when you download the Windows app."), false);
}

const toggleChatsOnClick = (selector) => {
	const clickables = document.querySelectorAll(selector);
	if (!clickables.length) return false;

	clickables.forEach(clickable => {
		clickable.addEventListener("click", toggleHiddenUI);
	})
	return true
};

export const runWhatsapp = () => {
	initWhatsapp();
	observeAndRun(() => toggleChatsOnClick('[aria-label="Chats"]'));
	observeAndRun(() => toggleChatsOnClick(CHATLISTITEM_SELECTOR));
};
