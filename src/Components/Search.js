import React, { useState } from "react";
import data from './ProductData.json'

const Search =()=>{

    const [filterdItems, setFilterdItems]=useState('')

    return(
        <div className="container">
            <div className="searchInput">
                <input 
                type="text"
                 placeholder="write product name..."
                 onChange={(e)=>{setFilterdItems(e.target.value)}}
                 />
            </div>
            <div className="cards">
                {
                    data.filter((val)=>{
                        if(filterdItems ===""){
                            return val
                        }else if(val.title.toLowerCase().includes(filterdItems.toLowerCase())){
                            return val;
                        }
                    }).map((val)=>{
                        return(
                            <div className="cardContent">
                                    <img src={val.image} alt=""/>
                                    <h2>{val.title}</h2>
                                    <p>{val.price}$</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}
export default Search