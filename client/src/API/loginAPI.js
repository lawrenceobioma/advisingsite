import { LINK } from './constants';


//function for validating user login
const validate = async () => {
    await fetch(LINK + "/login") //fetching the api
        .then((response) => { //getting the response
            return response;
        })
    // .catch(e) //catching server errors
    // }
    //     console.log(e);
    // }   
}


//exporting function
export default {
    validate
}