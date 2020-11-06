import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


const GifExpertApp= (props) => {

  const state = ['']



  const [categories, setCategories] = useState(state)

    return (
        <div>
            <h2>Gif Search</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            
            <ol>
                {
                    categories.map(category => (
                         <GifGrid 
                         key={ category}
                         category = {category}/>
                    ))
                }
            </ol>
        </div>
    )
}


export default GifExpertApp

