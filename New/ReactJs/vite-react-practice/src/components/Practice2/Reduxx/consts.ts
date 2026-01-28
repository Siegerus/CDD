import { v4 as uuidv4 } from 'uuid';

type Item = {
	id: string;
	name: 'local' | 'global';
	value: string;
	isActive: boolean;
};

const ITEMS: Item[] = [
	{ id: uuidv4(), name: 'local', value: '', isActive: true },
	{ id: uuidv4(), name: 'global', value: '', isActive: false },
	{ id: uuidv4(), name: 'global', value: '', isActive: false },
	{ id: uuidv4(), name: 'local', value: '', isActive: false },
];

export { ITEMS };

export type { Item };
