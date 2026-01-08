import React from 'react'
import dateFormat from "date-format";




const LoadComments = ({comments}) => {


  return (
    <div>
        {comments.map((c) => {
          return(  <div key={c.id}> 
        <h5>{c.author}</h5>
        <p>{c.comment}</p>
    <p>
  {c.date ? dateFormat(new Date(c.date), "dddd, d mmmm yyyy") : "No date"}
</p>




            </div> );

        })}
    </div>
  )
}

export default LoadComments