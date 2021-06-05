import React from 'react';
import styles from './css/App.css';
import { Link, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { demoAction } from './redux/actions';

/**
 * For demo purpose, simple components are defined here. 
 * You should consider to structure your components in another file and import here.
 */
const Home = (props) => {

	let number = useSelector( state => state.reducer.num );
	let dispatch = useDispatch();
	
	return(
		<div>
			<h2>This demo the simple use case of redux</h2>
			<span>{number}</span>
			<button onClick={()=>dispatch(demoAction())}> Minus </button>
		</div>
	);

}
const About = () => <h2>Contnet of about</h2>;
const Contact = () => <h2>Content of contact</h2>;

const App = () => {
	return (
		<div>
			<h1>Hello, Server Side Rendering!</h1>
			{/* 
				Navigation links are defined. 
			*/}
			<div>
				<Link to="/" className={styles.nav}>Home</Link>
            	<Link to="/about" className={styles.nav}>About</Link>
            	<Link to="/contact" className={styles.nav}>Contact</Link>
			</div>
			{/* 
				<Swith> will searches through its children <Route> elements to find one whose path matches the current URL. 
				Current URL is set on the upper layer's <StaticRouter> together with context. See home.js for more information
			*/}
			<Switch>
				<Route path="/" exact component={ Home } />
				<Route path="/about" exact component={ About } />
				<Route path="/contact" exact component={ Contact } />
			</Switch>
		</div>
	);
}

export default App;