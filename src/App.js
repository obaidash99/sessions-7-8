import './App.css';
import { createContext, useState } from 'react';
import Navbar from './components/Navbar';
import ProductsList from './components/ProductsList';
import Card from './components/Card';

export const ProductsContext = createContext();

function App() {
	const [products, setProducts] = useState([
		{ id: 1, title: 'product1' },
		{ id: 2, title: 'product2' },
		{ id: 3, title: 'product3' },
	]);

	return (
		<div className="App">
			<ProductsContext.Provider value={products}>
				<Navbar />
				<Navbar.Toggle />
				<ProductsList products={products} />
				{/* <Card>
					<Card.Title />
					<Card.Img src="" />
				</Card> */}
			</ProductsContext.Provider>
		</div>
	);
}

export default App;
