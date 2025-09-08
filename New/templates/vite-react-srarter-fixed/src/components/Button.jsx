function Button({toClick}) {
	return (
        <div className="wrapper" onClick={toClick}>
            <button style={{margin: "10px"}}>Click me!</button>
            <button style={{margin: "10px"}}>Click me!</button>
            <button style={{margin: "10px"}}>Click me!</button>
            <button style={{margin: "10px"}}>Click me!</button>
        </div>
        
    ) 
}

export default Button;