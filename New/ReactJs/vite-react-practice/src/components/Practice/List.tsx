type Item = {
	title: string;
};

const listItems = [
	{ title: 'lorem1' },
	{ title: 'lorem2' },
	{ title: 'lorem3' },
	{ title: 'lorem4' },
];

type ListProps = {
	listItems: Item[];
};
const List = (): JSX.Element => {
	return (
		<ul className="list">
			{listItems.map((listItem, i) => {
				const keyValue = `${listItem.title}-${i}`;
				return (
					<li className="list-item" key={keyValue}>
						{' '}
						{listItem.title}{' '}
					</li>
				);
			})}
		</ul>
	);
};

export default List;
