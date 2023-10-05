import React from 'react'

export default function fp() {
  
  
  
    return <>
 
  
<div className="row mt-5">

<div className="col-md-12  ">
  <div className="card">
    <div className="card-header">
      <h3 className="card-title">Featured Products</h3>
    </div>
    <div className="card-body">
    

      <div className="row  ">
        {products.map((product, index) => (
          <div  className="col-md-3  product" key={index}>
            <Link to={`/ProuductDetails/${product._id}`} >
          
            <div className="card ">
              <div className="card-header">
                
              <h5 className="card-title">{product.title.split(' ').slice(0,2).join(' ')}</h5>
              <span className='text-success' >{product.description}</span>
              </div>
              <div className="card-body">
               
               <img className='w-100' src={product.imageCover} alt="" />
               <div className="d-flex justify-content-between">
                <span className='text-muted'>{product.price} EGY</span>
                <span> <i className='fas fa-star text-warning'></i>
                {product.ratingsAverage}
                 </span>

               </div>
              </div>
              
            </div>
            
            </Link>
            <button onClick={()=>addProudctToCart(product._id)}  className='btn  btn-success w-100'>add proudct</button>

          </div>
        ))}
      </div>
     
    </div>
  </div>
</div>
<>
    {BrandsDitails.map((BrandsDitails, index) => (
        <div key={index} className="row">
       <Card>
        <Card.Img variant="top" src="https://placeimg.com/300/120/any"/>
        <Card.Header>{BrandsDitails?.data.name}</Card.Header>
        <Card.Body>
            <Card.Text>
                Some quick example text to build the card out and make up the bulk of
                the card's content.
            </Card.Text>
        </Card.Body>
       </Card>
       </div>
    ))}
    </>

</div>
</>
}
