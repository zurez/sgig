
import axios from 'axios';
import Config from './config';


const search=function search(anObject) {

	return new Promise((resolve,reject)=>{
		try{
			axios.post(`${Config.server}/search`,anObject).
			then((r)=>resolve(r.data))	
		}
		catch(e){

		}
	})
	
	
}

export {search}