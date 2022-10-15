import { useContext } from 'react';
import { useRecoilState } from 'recoil';
import productsState from '../atoms/products-atom';
import { ProductsContext } from '../context/ProductsContext';

function ProductsList() {
	// const products = useContext(ProductsContext);
	const [products, setProducts] = useRecoilState(productsState);

	return (
		<div className="products-list">
			{products.map((product) => (
				<h1 key={product.id}>{product.title}</h1>
			))}
		</div>
	);
}

export default ProductsList;
