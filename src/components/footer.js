import React,{Component} from 'react'

import {
Segment,Container,Grid,Header,List
} from 'semantic-ui-react'
class Footer extends Component{

	render(){
		return(
			<Segment  vertical style={{ padding: '5em 0em',backgroundColor:'#59595C' }}>
		      <Container>
		        <Grid divided inverted stackable>
		          <Grid.Row>
		          	<Grid.Column width={1}></Grid.Column>
		            <Grid.Column width={3}>
		              <Header inverted as='h4' content='Information' />
		              <List link inverted>
		                <List.Item as='a'>Privacy Policy</List.Item>
		                <List.Item as='a'>Cookie Policy</List.Item>
		                <List.Item as='a'>Terms of Service</List.Item>
		                <List.Item as='a'>Blog</List.Item>
		              </List>
		            </Grid.Column>
		            <Grid.Column width={3}>
		              <Header inverted as='h4' content='Information' />
		              <List link inverted>
		                <List.Item as='a'>Privacy Policy</List.Item>
		                <List.Item as='a'>Cookie Policy</List.Item>
		                <List.Item as='a'>Terms of Service</List.Item>
		                <List.Item as='a'>Blog</List.Item>
		              </List>
		            </Grid.Column>
		            <Grid.Column width={3}>
		              <Header inverted as='h4' content='Information' />
		              <List link inverted>
		                <List.Item as='a'>Privacy Policy</List.Item>
		                <List.Item as='a'>Cookie Policy</List.Item>
		                <List.Item as='a'>Terms of Service</List.Item>
		                <List.Item as='a'>Blog</List.Item>
		              </List>
		            </Grid.Column>
		            <Grid.Column width={3}>
		              <Header inverted as='h4' content='Information' />
		              <List link inverted>
		                <List.Item as='a'>Privacy Policy</List.Item>
		                <List.Item as='a'>Cookie Policy</List.Item>
		                <List.Item as='a'>Terms of Service</List.Item>
		                <List.Item as='a'>Blog</List.Item>
		              </List>
		            </Grid.Column>

		            
		          </Grid.Row>
		        </Grid>
		      </Container>
		    </Segment>
		)
	}
}

export default Footer