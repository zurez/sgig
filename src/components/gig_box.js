'use strict';

import React, { Component } from 'react';

import {
	Segment,Image,Button,Divider,Header
} from 'semantic-ui-react';


import Config from './../config.js';
class GigBox extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {}
	}
  render() {

    return (
      <Segment 
      >
      <Image  
       className="gigbox_image"
       centered
       src={`${Config.base_url}${(this.props.data && this.props.data.profile.pictureUrl)?
       	this.props.data.profile.pictureUrl:'placeholder'}`} />
       <Divider/>
       <Header as ="h3" textAlign="center">
       {(this.props.data &&this.props.data.profile.firstName)?this.props.data.profile.firstName:`John Doe`}
       </Header>
       <div className="job_title">
       {(this.props.data &&this.props.data.profile.jobTitle)?this.props.data.profile.jobTitle:`No Position`}
       </div>
       <br/>
       <div className="center">
	       <Button color="olive">
	       {`Exp. Level: ${(this.props.data &&this.props.data.experienceLevelName)?
	       	this.props.data.experienceLevelName:'0-1 years'}`}
	       </Button>
       </div>
      </Segment>
    );
  }
}


export default GigBox;