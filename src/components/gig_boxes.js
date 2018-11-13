'use strict';

import React, { Component } from 'react';

import {Segment,Grid} from 'semantic-ui-react';

import GigBox from './gig_box.js';

class GigBoxes extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	  this.gb=this.gig_boxes.bind(this)
	}

	gig_boxes(){
		const data=(this.props.data)?this.props.data:[]
		return data.map((e,i)=>{
			
			return (
				<Grid.Column width={5}>
				<GigBox data={e} />
				</Grid.Column>
				)
		})
	}

  render() {
  	console.log({data:this.props.data})
    return (
    	<Grid
    	stackable
    	columns={3}
    	>
      	{this.gb()}
      </Grid>
    );
  }
}




export default GigBoxes;