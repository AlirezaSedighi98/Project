import axios from "axios"


export const getData = async (dispatch) => {
    try {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts")
        dispatch({type: "success" , payload: data})

    } catch (error) {
        console.log(error.message) 
        dispatch({type: "failed" , payload: error.message})
    }
}