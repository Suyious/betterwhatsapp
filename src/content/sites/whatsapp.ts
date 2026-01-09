import { observeAndRun } from "../../utils/dom"

const TOGGLE_CLASS = "betterwhatsapp-ui-hide-target";

function updateHeadingText() {
	const span = document.querySelector(
		'span.x140p0ai.x1gufx9m.x1s928wv.xhkezso.x1gmr53x.x1cpjm7i.x1fgarty.x1943h6x.x193iq5w.xeuugli.x13faqbe.x1vvkbs.x1lliihq.x1fj9vlw.x14ug900.xcytdqz.x9u28bd.x1hx0egp.x579bpy.xjb2p0i.xo1l8bm.x1akz92t.x1ic7a3i'
	) as HTMLSpanElement | null;

  if (!span) return false;

	span.innerText = "Never Download WhatsApp for Windows"
  return true;
}

function toggleHiddenUI() {
	document.documentElement.classList.toggle(TOGGLE_CLASS);
}

function initWhatsapp() {

	console.log("[WHATSAPP] RUNNING")

	toggleHiddenUI();

	observeAndRun(updateHeadingText);

}

const toggleChats = () => {

	const clickable = document.querySelector('[aria-label="Chats"]');
	if (!clickable) return false;

	clickable.addEventListener("click", toggleHiddenUI);
	return true
};

export const runWhatsapp = () => {

	initWhatsapp();
	observeAndRun(toggleChats);

};
