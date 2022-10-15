import { useContext } from 'react';
import { ProductsContext } from '../App';

function Navbar() {
	const value = useContext(ProductsContext);

	return (
		<div className="navbar">
			<h1> Products Count: {value.length}</h1>
		</div>
	);
}
Navbar.Toggle = function () {
	return <h1>Toggle</h1>;
};

export default Navbar;
