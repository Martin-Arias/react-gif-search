import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs'


export const useFetchGifs = (category) => {


    const [state, setState] = useState({
        data:[],
        loading:true
    })


    //Hace una peticion Http cada vwez que haya un cambio en category
    useEffect( () => {

        getGifs(category)
        .then( imgs => {
            setState({
                data:imgs,
                loading:false
            })
        })

    },[category])

    return state; //{data:[], loading: true}

}