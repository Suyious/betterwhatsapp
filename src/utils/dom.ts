type Predicate = () => boolean;

export function observeAndRun(
	predicate: Predicate,
	options: MutationObserverInit = { childList: true, subtree: true }
) {
	if(predicate()) return;

	const observer = new MutationObserver(() => {
		if(predicate()) {
			observer.disconnect();
		}
	});
	observer.observe(document.body, options);
}
