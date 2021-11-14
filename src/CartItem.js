import React from 'react';
class CartItem extends React.Component{
    render(){
        const {price, title, qty} = this.props.product
        // this.props.product.price
        //this.props.product.title
        // this. props .product.qty
        return(
           
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src ={this.props.product.img}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs{price}</div>
                    <div style={{color:'#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/*Button */}
                        <img alt ="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png" onClick ={()=>this.props.onIncreaseQuantity(this.props.product)} />
                        <img alt ="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/463/463700.png" onClick = {()=>this.props.onDecreaseQuantity(this.props.product)}/>
                        <img alt ="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/3221/3221897.png" onClick ={()=> this.props.onDeleteProduct(this.props.product.id)}/>
                    </div>
                </div>

            </div>
        );
    }
}
const styles = {
    image:  {
        height: 110,
        width: 110,
        borderRadius: 4
    }
}

export default CartItem;

