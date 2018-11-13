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
      <Grid
      columns={2}
      stackable
      padded
      >
      	<Grid.Column
      	computer={6}
      	mobile={16}
      	tablet={6}
     
      	>
        <Segment>
          <SearchFilter data={this.state.data}/>

        </Segment>
      	</Grid.Column>
      	<Grid.Column
      	computer={10}
      	mobile={16}
      	tablet={10}
      	
      	>
        <GigBoxes data={this.state.gigs}/>
      	</Grid.Column>
      </Grid>
    );
  }
}




export default ActionScreen;