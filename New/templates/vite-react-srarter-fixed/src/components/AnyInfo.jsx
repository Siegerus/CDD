function AnyInfo({ about, importance, order, any, lorem }) {
	return order == 1 ? ( // 1 варинт вернуть нужный html тернарниками
		<h1>
			{order} text if order: 1 {importance} info about {about}
		</h1>
	) : (
		<h1>
			{order} text if order: 2 {importance} info about {about}
		</h1>
	);

	let text =
		order == 1 // 2 варинт вернуть нужный html тернарниками
			? `${order} text if order: 1 ${importance} info about ${about}`
			: `${order} text if order: 2 ${importance} info about ${about}`;

	return <h1>{text}</h1>;

	return (
		<div>
			<p>Lorem, ipsum.</p>
			{order == 1 ? (
				<h1>
					{order} text if order: 1 {importance} info about {about}
				</h1>
			) : (
				<h1>
					{order} text if order: 2 {importance} info about {about}
				</h1>
			)}
			<p>Lorem, ipsum.</p>
		</div>
	);

	if (order == 1)
		return (
			<h1>
				{order} text if order: 1 {importance} info about {about}
			</h1>
		);
	else if (order == 3 && !lorem)
		return (
			<h1>
				{order} text if order: 3 {importance} info about {about}
			</h1>
		);
	else if (order == 3 && lorem)
		return (
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				Labore, deleniti suscipit ab fugiat tempore perspiciatis?
			</p>
		);
	else if (order == 'any')
		return (
			<div>
				<h1>
					{order} text if order: "any" {importance} info about {about}
				</h1>
				<p>Lorem, ipsum dolor.</p>
			</div>
		);
	else
		return (
			<h1>
				{order} text if order: 2 {importance} info about {about}
			</h1>
		);
}

export default AnyInfo;
