import { useInsertionEffect } from 'react';

function MyComponent() {
	// ...
	// 🎨

	useInsertionEffect(() => {
		injectStylesIntoDom();
	}, [dependencies]);

  return ...
}



