import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Image, ListGroup, Row } from 'react-bootstrap'
import { CartState } from '../context/Context';
import Rating from "./Rating";
import { AiFillDelete } from 'react-icons/ai';

const Cart = () => {
  const{
    state: {cart},
    dispatch,
  } = CartState(); // make a useEffect to calculate total

const [total,setTotal] = useState();

useEffect(()=>{
  setTotal(cart.reduce((acc, curr)=> acc + Number(curr.price) * curr.qty, 0)); //accumulator and current
} , [cart]);

  return (
    <div className='home'>
     <div className='productContainer'>
      <ListGroup>
      {cart.map((prod)=>(//as map is written therefore key is used
        
        <ListGroup.Item key ={prod.id}>
          <Row>
          <Col md = {2}>
             <Image src={prod.image} alt={prod.name} fluid rounded/>
             </Col>
            <Col md ={2}>
             <span>{prod.name}</span>
             </Col>
             <Col md ={2}> {prod.price}</Col>
            <Col md = {2}>
             <Rating rating ={prod.ratings}/>
             </Col>
             <Col md = {2}>
             <Form.Control 
             as= "select" 
             value={prod.qty}
             onChange={(e)=>
            dispatch({
              type: "CHANGE_CART_QTY",
              payload :{
                id: prod.id,
                qty: e.target.value,
              },
            })
            }  
             >
              {[...Array(prod.inStock).keys()].map((x)=>(
                <option key={x+1}>{x + 1}</option>
              ))}

             </Form.Control>
             </Col>
             {/* <Col md = {2}>
             <Form.Control as= "select" value={prod.qty}>
              {[...Array(prod.inStock).keys()].map((x)=>(
                <option key={x+1}>{x + 1}</option>
              ))}
             </Form.Control>
             </Col> */}
             <Col md= {2}>
            <Button
            type='button'
            variant='light'
            onClick={()=> //means as soon as we will click on delete button the remove from cart functionality is called
            dispatch({
              type:'REMOVE_FROM_CART',
              payload: prod,
           
            })
            }
            >
              <AiFillDelete fontSize= "20px"/>
            </Button>
             </Col>
          </Row>
        </ListGroup.Item>
      
      ))}
      </ListGroup>
     </div>
<div className='filters summary'>
  <span className='title'>Subtotal ({cart.length}) items</span>
  <span style={{fontWeight: 700, fontSize: 20}}>Total: ₹{total}</span>
  <Button type= 'button' disabled = {cart.length=== 0}>
    Proceed To Checkout
  </Button>

</div>
    </div>
  );
};

export default Cart