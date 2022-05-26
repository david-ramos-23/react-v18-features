import { startTransition } from 'react';

// Urgent: Show what was typed
setInputValue(input);

// Mark any state updates inside as transitions
startTransitions(() => {
	// Transition: Show the results
	setSearchQuery(input);
});
