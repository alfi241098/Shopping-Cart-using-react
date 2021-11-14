import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component{
   
 render(){
     const {products}= this.props;
     return(
         <div className="cart">
         {products.map((product) =>{
        
            return <CartItem 
            product ={product}
             key ={product.id} 
            onIncreaseQuantity={this.props.onIncreaseQuantity}
            onDecreaseQuantity={this.props.onDecreaseQuantity}
            onDeleteProduct ={this.props.onDeleteProduct}
            />
        })}
        </div>

     );
 }

}
export default Cart;

