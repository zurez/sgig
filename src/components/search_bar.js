'use strict';

import React,{Component} from 'react';

import './../App.css';

import {Segmen,Container,Grid,
Input,Header,
Search,Button
} from 'semantic-ui-react';

class SearchBar extends Component {

	constructor(props){
		super(props)
		this.search_input=React.createRef()
	}
	handleClick(e){
		this.props.search()
	}

  render() {
    return (
    	
	<Grid stackable className="search_body"
	
	columns={3}
	textAlign="center"
	>

		<Grid.Row>
			
			<Grid.Column
			computer={12}
			mobile={16}
			tablet={16}
			className="search_col"
			
		
			>

			
			

				
				
			</Grid.Column>
		
		</Grid.Row>

		<Grid.Row>
			
			<Grid.Column
			computer={14}
			mobile={15}
			tablet={14}
			className="search_col"
			
			
			>
			<Grid.Row>
				<Header size="huge" inverted>
				Explore Thousand Of Jobs With Simple Search...
			</Header>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column>
				<Input 
				type='text' 
				placeholder='Job title, keyword or company name ...'
				className="search_input"
				onChange={(e)=>this.props.set_searchquery(e.target.value)}
				action={{ 
					onClick:this.handleClick.bind(this),
					color:"red",
					content: 'Search' }}
				 />

				
				</Grid.Column>
			</Grid.Row>
			</Grid.Column>
			
		</Grid.Row>
	</Grid>
    	
    );
  }
}


export default SearchBar;