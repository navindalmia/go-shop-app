import React from 'react'
import { Container, Form, FormControl, Button } from 'react-bootstrap';

export default function TopBar(){

    return(
        
<Container fluid className="top-bar">
<div  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft:'20px' , paddingRight:'20px'}}>
  {/* Store Locator */}
  <div>
    <span>Find a Store</span>
    <span style={{ margin: '0 10px' }}>|</span>
    <span>Track Your Order</span>
  </div>
  {/* Search Area */}
  <Form inline = "true">
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button variant="primary" className="mr-2">Search</Button>
  </Form>
  {/* Checkout */}
  <Button variant="outline-primary">Checkout</Button>
</div>
</Container>
    )

}