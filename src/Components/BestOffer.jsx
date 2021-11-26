import React,{Component} from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {AiOutlineShoppingCart} from "react-icons/ai";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
        <h3> Exclusive </h3>
        <h1>BEST OFFER</h1>
        <Slider {...settings}>
          <div className="offer_img">
            <img src="" alt=""/>
            <h3>Fried Fish with Sweet</h3>
            <h4>500.00</h4>
            <div className="offer_btn">
              <a href="" className="btn btn-smart"><AiOutlineShoppingCart/>ADD TO CART</a>
            </div>
          </div>
          <div className="offer_img">
            <img src="" alt=""/>
            <h3>Weekend Snacks</h3>
            <h4>270.00</h4>
            <div className="offer_btn">
              <a href="" className="btn btn-smart"><AiOutlineShoppingCart/>ADD TO CART</a>
            </div>
          </div>
          <div className="offer_img">
            <img src="" alt=""/>
            <h3>Arabian Burger</h3>
            <h4>700.00</h4>
            <div className="offer_btn">
              <a href="" className="btn btn-smart"><AiOutlineShoppingCart/>ADD TO CART</a>
            </div>
          </div>
          <div className="offer_img">
            <img src="" alt=""/>
            <h3>Spicy Chicken</h3>
            <h4>200.00</h4>
            <div className="offer_btn">
              <a href="" className="btn btn-smart"><AiOutlineShoppingCart/>ADD TO CART</a>
            </div>
          </div>
          <div className="offer_img">
            <img src="" alt=""/>
            <h3>Barcode Spicy Chicken</h3>
            <h4>250.00</h4>
            <div className="offer_btn">
              <a href="" className="btn btn-smart"><AiOutlineShoppingCart/>ADD TO CART</a>
            </div>
          </div>
          <div className="offer_img">
            <img src="" alt=""/>
            <h3>Vegetable Salad</h3>
            <h4>200.00</h4>
            <div className="offer_btn">
              <a href="" className="btn btn-smart"><AiOutlineShoppingCart/>ADD TO CART</a>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}