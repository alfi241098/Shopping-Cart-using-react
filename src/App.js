import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
class App extends React.Component {
  constructor(){
    super();
    this.state={
        // products is an array of objects
        products:[
            {
                price:99,
                title:'Watch',
                qty :1,
                img:'https://rukminim1.flixcart.com/image/332/398/kkr72q80/watch/f/h/t/digital-watch-for-boys-virani-enterprise-original-imagyf7gxuuxvefy.jpeg?q=50',
                id:1
            },
            {
                price:999,
                title:'Mobile Phone',
                qty:1,
                img:'https://i.gadgets360cdn.com/products/large/redmi-note-10s-db-600x800-1620030866.jpg',
                id:2
            },
            {
                price:999,
                title:'Laptop',
                qty:1,
                img:'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1634550237/Croma%20Assets/Computers%20Peripherals/Laptop/Images/243918_azjwcl.png/mxw_1440,f_auto',
                id:3
            }
           
        ]
    }
}
handleIncreaseQuantity= (product)=> {
    const {products}=this.state;
    const index = products.indexOf(product);

    products[index].qty +=1;
    this.setState({
        products:products
    })
}
handleDecreaseQuantity=(product)=>{
    const {products} =this.state;
    const index = products.indexOf(product);

    

    if( products[index].qty ==0)
    {
        return ;
    }
    products[index].qty -=1;
    this.setState({
        products:products
    })
}
handleDeleteProduct= (id) =>{
    const {products} = this.state;
     

    const items = products.filter((item)=> item.id!==id);
    this.setState({
        products : items
    })
}
getCartCount = () =>{
  const {products} = this.state;
  let count=0;
  products.forEach((product)=>{
    count +=product.qty;

  })
  return count;

}

getCartTotal=()=>{
  const {products} = this.state;
  let price=0;
  products.map((product)=>{
    price +=product.qty*product.price;

  })
  return price;

}
  render(){
    const {products}= this.state; 
  return (
    <div className="App">
       <Navbar count ={this.getCartCount()} />
       <Cart  products ={products}
            onIncreaseQuantity={this.handleIncreaseQuantity}
            onDecreaseQuantity={this.handleDecreaseQuantity}
            onDeleteProduct ={this.handleDeleteProduct}/>

        <div style ={{fontSize:20 ,padding :10}}> TOTAL PRICE : {this.getCartTotal()}</div>
     </div>
  );
  }
}

export default App;
