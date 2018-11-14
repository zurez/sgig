'use strict';

import React, { Component } from 'react';

import {Segment,Grid,Pagination} from 'semantic-ui-react';

import GigBox from './gig_box.js';

class GigBoxes extends Component {
	constructor(props) {
	  super(props);
	 
	  this.state = {
      active_page:1,
      total_pages:1,
      page_size:5
    };
	  this.gb=this.gig_boxes.bind(this)
    this.handle_pagination_change=this.handle_pagination_change.bind(this)
  
	}


  handle_pagination_change(e,{activePage}){
    this.setState({active_page:activePage})
  }
	gig_boxes(){
		let  data=(this.props.data)?this.props.data:[]
    const start=(this.state.active_page-1)*this.state.page_size;
    const end=start+this.state.page_size;
	   data=data.slice(start,end)
    return data.map((e,i)=>{
			
			return (
				<Grid.Column width={5} key={`cl${i}`}>
				<GigBox data={e} />
				</Grid.Column>
				)
		})
	}

  render() {
  	let gb=this.gb()
    const data=(this.props.data)?this.props.data:[]
    const total_pages=Math.round(data.length/5)

    return (
    	<Grid
    	stackable
    	columns={3}
    	>
    	<Grid.Row>
    		<Grid.Column>
    			<h3>{
    				(this.props.data && this.props.data.length>0)?
    				`${this.props.data.length} result(s) found out of 25`:
    				`No results...`
    				}</h3>
    		</Grid.Column>
    	</Grid.Row>
    	<Grid.Row>
      	{gb}
      	</Grid.Row>
      {(data.length>this.state.page_size)?  
      <Grid.Row>
        <Grid.Column>
        <Pagination
            activePage={this.state.active_page}
            onPageChange={this.handle_pagination_change}
            totalPages={total_pages}
          />
        </Grid.Column>
      </Grid.Row>:null}
      </Grid>
    );
  }
}




export default GigBoxes;