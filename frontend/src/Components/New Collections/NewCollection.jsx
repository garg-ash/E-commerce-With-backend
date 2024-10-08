import React from 'react'
import './NewCollection.css'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'


function NewCollection() {
  return (
    <div className="new-collections">
        <h1>New Collections</h1>
        <hr />
        <div className="collections">
            {new_collections.map((item, i)=>{
                return <Item key={i} id = {item.id} name = {item.name} category = {item.category} image = {item.image} new_price = {item.new_price} old_price = {item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollection