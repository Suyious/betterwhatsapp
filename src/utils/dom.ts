type Predicate = () => boolean;

export function observeAndRun(
	predicate: Predicate,
	disconnect: boolean = true,
	options: MutationObserverInit = { childList: true, subtree: true }
) {
	if(predicate() && disconnect) return;

	const observer = new MutationObserver(() => {
		if(predicate() && disconnect) {
			observer.disconnect();
		}
	});
	observer.observe(document.body, options);
}
