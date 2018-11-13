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
        <FilterButtons 
        reset_filter={this.props.reset_filter}
        remove_filter={this.props.remove_filter}
        data={this.props.filters}/>
        <Filters set_filter={this.props.set_filter1}
        data={this.props.filters}
        />
     	</span>
    );
  }
}




export default SearchFilter;