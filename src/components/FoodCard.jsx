import React, { useState } from "react";
import Carddata from "./Data";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
const FoodCard = () => {
  const [data, setData] = useState(Carddata);
  console.log(data);
  return (
    <div className='mt-3'>
     <h1 className="mt-8 text-center mb-2 text-lime-300 text-3xl font-bold">
        Menu
      </h1>
      <div className="row flex flex-wrap justify-center ">
        {
          data.map((element, id) => {
            return (
              <>
                <Card className="mx-2 my-4 card_style justify-self-center  ">
                  <Card.Img variant="top" src={element.imgdata}  className="mt-3 h-60 w-72" />
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>
                    Price : ₹ {element.price}
                    </Card.Text>
                    <div className="button_div d-flex justify-content-center align-items-center">
                    <Button className="btn bg-orange-300 px-3 py-2 rounded-md ">Add to cart</Button>
                    </div>
                  
                  </Card.Body>
                </Card>
              </>
            )
          })
        }

      </div>
      

    
    {/* <div className="row d-flex justify-content-center align-items-center">
      {
        data.map((element, id) => {
          return (
            <>
            <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
              {/* <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-4 card_style">
                <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className="mt-3" />
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>
                  Price : ₹ {element.price}
                  </Card.Text>
                  <div className="button_div d-flex justify-content-center">
                  <Button variant="primary"  
                   className='col-lg-12'>Add to Cart</Button>
                  </div>
                
                </Card.Body>
              </Card> */}
            {/* </>
          )
        })
      }

    </div> */}
  </div>
  );
};

export default FoodCard;
