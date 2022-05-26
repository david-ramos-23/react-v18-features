import * as ReactDOMClient from 'react-dom/client';

function App() {
	return (
		<div>
			<h1>Hello World</h1>
		</div>
	);
}

// const rootElement = doc>ument.getElementById('root');

ReactDOMClient.render(<App />, rootElement, () => console.log('renderered'));

import * as ReactDOMClient from 'react-dom/client';

function App({ callback }) {
	// Callback will be called when the div is first created.
	return (
		<div ref={callback}>
			<h1>Hello World</h1>
		</div>
	);
}

const rootElement = document.getElementById('root');

const root = ReactDOMClient.createRoot(rootElement);
root.render(<App callback={() => console.log('renderered')} />);
