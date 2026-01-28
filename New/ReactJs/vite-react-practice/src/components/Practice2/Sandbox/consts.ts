import { v4 as uuidv4 } from 'uuid';

type Item = {
	id: string;
	name: 'local' | 'global';
	value: number;
	isActive: boolean;
};

const ITEMS: Item[] = [
	{ id: uuidv4(), name: 'local', value: 1, isActive: true },
	{ id: uuidv4(), name: 'global', value: 2, isActive: false },
	{ id: uuidv4(), name: 'global', value: 3, isActive: false },
	{ id: uuidv4(), name: 'local', value: 4, isActive: false },
	{ id: uuidv4(), name: 'local', value: 5, isActive: false },
	{ id: uuidv4(), name: 'local', value: 6, isActive: false },
	{ id: uuidv4(), name: 'local', value: 7, isActive: false },
];

export { ITEMS, type Item };
