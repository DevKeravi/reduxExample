import AddNumber from "../components/AddNumber.jsx";
import React,{ Component } from "react";
import store from '../store';

export default class  extends Component{
	render() {
		return <AddNumber onClick={function(size){
			store.dispatch({type:'INCREMENT' , size: size});
		}.bind(this)} />
	}

}
