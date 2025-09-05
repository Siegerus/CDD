import './App.css';

function MyComponent() {
	return (
		<div>
			<h1>This is my component!</h1>
			<button><span>Click!</span></button>
		</div>
	)
}


function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

export default App;
