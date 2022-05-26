import { useDeferredValue, useMemo } from 'react';

function Typeahead() {
	const query = useSearchQuery('');
	// we can set a timeout of the minimum return time
	const deferredQuery = useDeferredValue(query, { timeoutMs: 3000 });

	// Memoizing tells React to only re-render when deferredQuery changes,
	// not when query changes.
	const suggestions = useMemo(
		() => <SearchSuggestions query={deferredQuery} />,
		[deferredQuery]
	);

	return (
		<>
			<SearchInput query={query} />
			<Suspense fallback="Loading results...">{suggestions}</Suspense>
		</>
	);
}
