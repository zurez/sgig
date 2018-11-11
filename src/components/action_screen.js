'use strict';

import React, { Component } from 'react';

import {
Grid,Card,Segment
} from 'semantic-ui-react';

import SearchFilter from './search_filter.js';

class ActionScreen extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      data:{
        budget_type:['hour'],
        company_name:['Facebook','Pizza Hut','U','Facebook','Dominos','U']
      }
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
      	color="red"
      	>
        <Segment>
        <SearchFilter data={this.state.data}/>

        </Segment>
      	</Grid.Column>
      	<Grid.Column
      	computer={10}
      	mobile={16}
      	tablet={10}
      	color="red"
      	>
      	</Grid.Column>
      </Grid>
    );
  }
}




export default ActionScreen;