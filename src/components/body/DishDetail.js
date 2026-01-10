
import { Card,CardBody,CardTitle,CardText,CardImg } from 'reactstrap'
import Menu from './Menu'
import LoadComments from './LoadComments'
import COMMENTS from '../../data/comments'



const DishDetail =props  => {
  const dish=props.dish;
  return (
    <div>
<Card
  className="my-3"
  style={{
    borderRadius: '16px',
    overflow: 'hidden',
    border: 'none',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  }}
>
  <CardImg
    alt={dish.name}
    src={dish.image}
    top
    width="100%"
    style={{
      height: '220px',
      objectFit: 'cover'
    }}
  />

  <CardBody
    style={{
      backgroundColor: '#ffffff',
      padding: '1.5rem',
      textAlign: 'left'
    }}
  >
    <CardTitle
      tag="h5"
      style={{
        fontWeight: '700',
        fontSize: '1.4rem',
        marginBottom: '0.5rem',
        color: '#2c2c2c'
      }}
    >
      {dish.name}
    </CardTitle>

    <CardText
      style={{
        fontSize: '0.95rem',
        lineHeight: '1.6',
        color: '#6c757d',
        marginBottom: '0.8rem'
      }}
    >
      {dish.description}
    </CardText>

    <CardText
      style={{
        fontWeight: '600',
        fontSize: '1.1rem',
        color: '#d6336c'
      }}
    >
      ¥ {dish.price}
    </CardText>
    <hr></hr>
    <LoadComments comments={props.comments}/>

    
  </CardBody>
</Card>




        
    </div>
  )
}

export default DishDetail