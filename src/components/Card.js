function Card() {
	return <h1>Card</h1>;
}

Card.Title = function () {
	return <p>Card Ttitle</p>;
};

Card.Img = function (props) {
	return <img src={props.src} alt={props.alt} />;
};

export default Card;
