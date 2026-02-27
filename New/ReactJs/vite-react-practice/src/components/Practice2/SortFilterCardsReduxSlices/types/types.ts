type SortFieldType = 'id' | 'price';

type NavCity = {
	city: string;
	isActive: boolean;
};

type Place = {
	id: number;
	name: string;
	city: string;
	info: string;
	price: number;
};

type Data = {
	body: string;
	id: number;
	title: string;
	userId: number;
};

export type { SortFieldType, NavCity, Place, Data };
