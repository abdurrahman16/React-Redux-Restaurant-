import React from 'react';
import Menu from './Menu.js';
import { Card,CardText, CardImgOverlay, CardImg,CardTitle } from 'reactstrap';

const MenuItem = ({dish, onSelectDish}) => {
  return (
    <div>
<Card
  inverse
  onClick={() => onSelectDish(dish)}
  style={{
    margin: '16px',
    cursor: 'pointer',
    borderRadius: '18px',
    overflow: 'hidden',
    border: 'none',
    boxShadow: '0 10px 28px rgba(0,0,0,0.2)',
    perspective: '1000px'
  }}
>
  {/* WRAPPER THAT HANDLES HOVER */}
  <div
    style={{
      position: 'relative',
      width: '100%',
      height: '270px'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.querySelector('img').style.transform =
        'rotateY(180deg)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.querySelector('img').style.transform =
        'rotateY(0deg)';
    }}
  >
    <CardImg
      src={dish.image}
      alt={dish.name}
      style={{
        width: '100%',
        height: '270px',
        objectFit: 'cover',
        transition: 'transform 0.8s ease',
        transformStyle: 'preserve-3d'
      }}
    />

    <CardImgOverlay
      style={{
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '1.5rem',
        background:
          'linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.15), transparent)'
      }}
    >
      <CardTitle
        tag="h2"
        style={{
          fontSize: '1.6rem',
          fontWeight: '700',
          color: '#ffffff',
          margin: 0,
          textShadow: '0 3px 8px rgba(0,0,0,0.6)'
        }}
      >
        {dish.name}
      </CardTitle>
    </CardImgOverlay>
  </div>
</Card>



</div>
  )
}

export default MenuItem