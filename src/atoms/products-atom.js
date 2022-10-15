import { atom } from 'recoil';

const productsState = atom({
	key: 'productsState',
	default: [
		{ id: 1, title: 'product1' },
		{ id: 2, title: 'product2' },
		{ id: 3, title: 'product3' },
	],
});

export default productsState;
