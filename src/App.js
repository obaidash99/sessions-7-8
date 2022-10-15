import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import ProductsList from './components/ProductsList';
import ProductsProvider from './context/ProductsContext';

function App() {
	return (
		<div className="App">
			{/* <ProductsProvider> */}
				<Navbar />
				<Navbar.Toggle />
				<ProductsList />
				<Card>
					<Card.Title />
				</Card>
			{/* </ProductsProvider> */}
		</div>
	);
}

export default App;
