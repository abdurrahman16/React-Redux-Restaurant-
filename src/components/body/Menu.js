import MenuItem from './MenuItem.js';
import {useState} from 'react';
import DISHES from '../../data/Dishes.js';

const Menu = () => {
  const [dishes] = useState(DISHES);

    const menu = dishes.map((dish) => {
        return <MenuItem dish={dish} key={dish.id}/>
    });
  return (
    <div className="Container">
        <div className="row">
          <div className='col-5'> {menu} </div>

        </div>
        
        
    </div>
  )
}

export default Menu;