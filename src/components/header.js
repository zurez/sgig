import React from 'react';
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'
import './../App.css';
const PageHeader=()=>{
	return(
		<div>
			<Menu  className="menu-fixed"
			inverted
			>
				<Container>
					<Menu.Item>
						<Image size='tiny' 
						src="https://www.skillgigs.com/wp-content/themes/skillgigs/img/sg.svg?v=20180504"/>
					</Menu.Item>
					<Menu.Item as='a'>FAQ</Menu.Item>
					<Menu.Item as='a'>BLOG</Menu.Item>
					<Menu.Item as='a'>ABOUT SKILLGIGS</Menu.Item>

					<Menu.Item as='a' position="right">LogIn</Menu.Item>
					
				</Container>
			</Menu>
		</div>

	)

}

export default PageHeader