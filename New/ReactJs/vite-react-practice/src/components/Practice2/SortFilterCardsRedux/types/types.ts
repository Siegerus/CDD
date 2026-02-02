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

export type { SortFieldType, NavCity, Place };
