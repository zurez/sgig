import React, { Component } from 'react';

import Header from './components/header';
import SearchBar from './components/search_bar';
import ActionScreen from './components/action_screen';
import {search} from './controller';
class App extends Component {

  constructor(props){
  	super(props)
  	this.state={
  		search_query:"",
      filters:{},
      search_result:[]
  	}
  }

  set_searchquery(search_query){
  
  	this.setState({search_query})
  }

  do_search(){
    
    search({search_query:this.state.search_query,filters:this.state.filters})
    .then(result=>this.setState({search_result:result}))
    .catch(e=>console.log(e.message))
  }
  set_filter(tag,element){
     
      if (!element || element==null) {return}
      let filters=Object.assign({},this.state.filters)
      try{
        let elements=filters[tag]
        const index=elements.indexOf(element)
        if (index==-1) {
          filters[tag].push(element)
        }else{
          elements.splice(index,1)
          filters[tag]=elements
        }
        
      }
      catch(e){
        filters[tag]=[element]
      }
      
      this.setState({filters},()=>this.do_search())
  }
  reset_filter(){
    const filters=[]
    this.setState({filters},()=>this.do_search())
  }

  remove_filter(element){
    let filters=Object.assign({},this.state.filters)
    const tag = Object.keys(filters).find(key => filters[key] == element);
    
    try{
   
      let elements=filters[tag].filter((e,i)=> e!=element)
      filters[tag]=elements
    
      this.setState({filters},()=>this.do_search())

    }
    catch(e){
      console.log({error:e})
    }
  }

  render() {
    return (
      <div>
        <Header/>
       
        <SearchBar set_searchquery={this.set_searchquery.bind(this)} 
        search={this.do_search.bind(this)}/>
        <ActionScreen 
        reset_filter={this.reset_filter.bind(this)}
        set_filter={this.set_filter.bind(this)}
        remove_filter={this.remove_filter.bind(this)}
        filters={this.state.filters}
        search_result={this.state.search_result}
        />
      </div>
    );	
  }
}

export default App;
