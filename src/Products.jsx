import React from 'react';
import { Link, Route } from 'react-router-dom';
import Product from './Product';

const Products = ({ match }) => {

  const productsData = [
   {
       id: 1,
       name: 'NIKE Liteforce Blue Sneakers',
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.',
       status: 'Available'

   },

   {
    id: 2,
    name: 'Addida yellow Sneakers',
    description: 'Lorem ipsum Whitestown.',
    status: 'Available'

},

];
/* Create an array of `<li>` items for each product*/
 var linkList = productsData.map( (product) => {
   return(
     <li>
       <Link to={`${match.url}/${product.id}`}>
         {product.name}
       </Link>
     </li>
     )

   })

 return(
   <div>
       <div>
        <div>
          <h3> Products</h3>
          <ul> {linkList} </ul>
        </div>
       </div>

       <Route path={`${match.url}/:productId`}
           render={ (props) => <Product data= {productsData} {...props} />}/>
       <Route exact path={match.url}
           render={() => (
           <div>Please select a product.</div>
           )}
       />
   </div>
 )
}
export default Products;
