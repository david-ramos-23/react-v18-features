function MyComponent() {
	const [counter, setCounter] = useState(0);
	const [flag, setFlag] = useState(null);

	function handleClick() {
		Promise.resolve.then(() => {
			// one render only
			setCounter(counter + 1);
			setFlag('useExperiment');
		});
	}

	// ...
}
