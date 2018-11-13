'use strict';

import React, { Component } from 'react';

import {
Segment
} from 'semantic-ui-react'
import FilterButtons from './filter_buttons';
import Filters from './filters';
class SearchFilter extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	filters:{}
	  };
	}

  render() {
    return (
     	<span>
        <FilterButtons data={this.props.data}/>
        <Filters/>
     	</span>
    );
  }
}




export default SearchFilter;