import { useEffect, useState } from "react"

const CustomHookComponent = () => {

	const [datas, setDatas] = useState([])

	const clickToFetchHandle = () => {
			async function getData() {
				try {
					const response = await fetch('https://jsonplaceholder.typicode.com/todos');
					const json = await response.json()
					return json
				} catch (error) {
					console.log(error)
				}
			}
			getData().then((res) => {
				console.log(res)
				setDatas(datas, ...res)
				console.log(datas)
			} );
	}

	

	return (
		<>
			<div className="data-container" style={{ "display": "flex" }}></div>
			<button onClick={clickToFetchHandle} type="button">Click to fetch</button>
		</>
	)
}

export default CustomHookComponent