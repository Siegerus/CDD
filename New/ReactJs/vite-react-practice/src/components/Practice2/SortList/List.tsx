import React from 'react';

type Person = {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
	gender: string;
	ip_address: string;
	image: string;
};

type ListProps = {
	dataArray: Person[];
};

const List = ({ dataArray }: ListProps) => {
	return (
		<div
			className="wrapper"
			style={{ display: 'flex', padding: '60px 0 60px 0' }}
		>
			{dataArray.map((person) => {
				return <Item id={person.id} image={person.image} key={person.email} />;
			})}
		</div>
	);
};

type ItemProps = Pick<Person, 'id' | 'image'>;

const Item = ({ id, image }: ItemProps) => {
	return (
		<div style={{ display: 'flex' }}>
			<p>{id}</p>
			<img
				src={image}
				style={{ width: '25px', height: '25px', marginLeft: '10px' }}
			/>
		</div>
	);
};
export default List;
