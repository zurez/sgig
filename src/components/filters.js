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
	set_filter(tag,element){
		this.props.set_filter(tag,element)
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
		const data=(this.props.data)?this.props.data:{}
		const values= [].concat(...Object.values(data))
    
		return (
			this.state.filters.map((e,i)=>{
				return(
				<span key={i}>
				<Header as="h4">{e.name}</Header>
				{e.elements.map((x,y)=>{
					return(
					<Form.Field control={Checkbox}
					label={x}
					checked={(values.indexOf(x)!=-1)?true:false}
					onChange={()=>this.set_filter(e.tag,x)}
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
		
		return(
			<div>
				<Divider/>
				{filters}
			</div>

		)
	}
}
export default Filters