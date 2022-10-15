import { useContext } from 'react';
import { useRecoilState } from 'recoil';
import productsState from '../atoms/products-atom';
import { ProductsContext } from '../context/ProductsContext';

function Navbar() {
	// const value = useContext(ProductsContext);
	const [products, setProducts] = useRecoilState(productsState);

	return (
		<div className="navbar">
			<h1> Products Count: {products.length}</h1>
		</div>
	);
}
Navbar.Toggle = function () {
	return <h1>Toggle</h1>;
};

export default Navbar;
