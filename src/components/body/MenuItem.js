import React from 'react';
import Menu from './Menu.js';
import { Card,CardText, CardImgOverlay, CardImg,CardTitle } from 'reactstrap';

const MenuItem = ({dish}) => {
  return (
    <div>
  <Card inverse style={{padding: 10 , margin: 10}}>
    <CardImg
      alt={dish.name}
      src={dish.image}
      style={{
        height: 270,
        opacity:0.5
      }}
      width="100%"
      
    />
    <CardImgOverlay>
      <CardTitle tag="h2" style={{fontSize: 25, fontWeight: 'bold', color:'#000'}}>
        {dish.name}
      </CardTitle>
      
    </CardImgOverlay>
  </Card>
</div>
  )
}

export default MenuItem