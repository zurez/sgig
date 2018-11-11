'use strict';

import React, { Component } from 'react';

import {Button,Icon,Grid,Header} from 'semantic-ui-react';

class FilterButtons extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  
	  };

	  this.b=this.buttons.bind(this)
	}

	buttons(){
		const data=(this.props.data)?this.props.data:{}
		const values= [].concat(...Object.values(data))
		return(
			values.map((e,i)=>{
				return(<Button 
					className="filter_button"
					icon
 					size="tiny"
 					compact
					labelPosition="right" >
					{e}  <Icon name='close' size="small"/>
					</Button>)
			})

		)
	}

  render() {
    return (
      <Grid 
      stackable
      columns={2}
      >
      	<Grid.Row>
      		<Grid.Column>
      			<Header as="h2">Filter</Header>

      		</Grid.Column>
      		<Grid.Column>
      		<Button
      		className="clearing pull-right clear-all"
      		size="tiny"
      		basic
      		>
      		CLEAR ALL</Button>
      		</Grid.Column>
      	</Grid.Row>
      	<Grid.Row>
      		<Grid.Column
      		width={16}
      		>
      		{this.b()}
      		</Grid.Column>
      	</Grid.Row>
      	
      </Grid>
    );
  }
}




export default FilterButtons;