import { Redirect, Route, Switch } from "react-router";
import Login from "./components/Login";
import Home from "./components/Home";
import Checkout from './components/Checkout/index';
import Product from './components/Product/index';
import About from './components/About/index';
import Register from "./components/Register";
import Profile from "./components/Profile";
import { useSelector } from 'react-redux';

function App() {
	const isLogin = localStorage.getItem('login')
	return (
		<>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/Home" component={Home} />
				<Route path="/Login" component={Login} />
				<Route path="/About" component={About} />
				<Route path="/Checkout" component={Checkout} />
				<Route path="/Product" component={Product} />
				<Route path="/Profile" component={Profile} />
				<Route path="/Register" component={Register} />
				<Route component={Error} />
			</Switch>
		</>
	);
}

export default App;
