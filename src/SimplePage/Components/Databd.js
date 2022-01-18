import { useEffect } from "react";
import axios from "axios";

const DataBd =()=> {


const UpdateBd =()=> {

    axios({
        method: 'post',
        url: 'http://localhost:3000/post',
        data: {1:'DataRegister'}
    })
}

        
        
   

    


return <button onClick={UpdateBd}></button>

}
export default DataBd;