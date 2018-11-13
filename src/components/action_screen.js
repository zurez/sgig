'use strict';

import React, { Component } from 'react';

import {
Grid,Segment
} from 'semantic-ui-react';

import SearchFilter from './search_filter.js';

import GigBoxes from './gig_boxes.js';


class ActionScreen extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      data:{
        budget_type:['hour'],
        company_name:['Facebook','Pizza Hut','U','Facebook','Dominos','U']
      },
      gigs:[]
    };
  }
  render() {
    return (
      <span>
      <br/>
      <Grid
      columns={2}
      stackable
      padded
      >
      	<Grid.Column
      	computer={5}
      	mobile={16}
      	tablet={6}
     
      	>
        <Segment>
          <SearchFilter data={this.state.data}
          filters={this.props.filters}
          set_filter1={this.props.set_filter}
          reset_filter={this.props.reset_filter}
          remove_filter={this.props.remove_filter}
          />

        </Segment>
      	</Grid.Column>
      	<Grid.Column
      	computer={11}
      	mobile={16}
      	tablet={10}
      	
      	>
        <GigBoxes data={this.props.search_result}/>
      	</Grid.Column>
      </Grid>
      </span>
    );
  }
}




export default ActionScreen;