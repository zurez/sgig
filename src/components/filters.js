import React,{Component} from 'react';

import axios from 'axios';
import Config from './../config';
import {Form,Header,Checkbox,Divider} from 'semantic-ui-react';
class Filters extends Component{
	constructor(props){
		super(props)
		this.state={
			data:[],
			filters:[]
		}

	}

	componentDidMount(){
		this.fetch_filters()
		if(this.state.filters.length==0 || !this.state.filters){
			this.fetch_filters()
		}
	}

	fetch_filters(){
		axios.get(`${Config.server}/filter`)
		.then(filters=>{
			console.log({filters})	
			this.setState({filters:filters.data})
		})
		.catch(error=>console.log({error}))
	}

	filters(){
		return (
			this.state.filters.map((e,i)=>{
				return(
				<span>
				<Header as="h4">{e.name}</Header>
				{e.elements.map((x,y)=>{
					return(
					<Form.Field control={Checkbox}
					label={x}
					/>
					)
				})}
				<Divider/>
				</span>
				)
			})
		)
	}
	render(){
		let filters=this.filters()
		console.log({filters:this.state.filters})
		return(
			<div>
				<Divider/>
				{filters}
			</div>

		)
	}
}
export default Filters