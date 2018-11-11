'use strict';

import React, { Component } from 'react';

import {
Segment
} from 'semantic-ui-react'
import FilterButtons from './filter_buttons';
class SearchFilter extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	filters:{}
	  };
	}

  render() {
    return (
     	<Segment>
        <FilterButtons data={this.props.data}/>
     	</Segment>
    );
  }
}




export default SearchFilter;