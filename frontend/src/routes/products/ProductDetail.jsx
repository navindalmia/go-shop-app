import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import ReactImageGallery from "react-image-gallery";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import 'react-image-gallery/styles/css/image-gallery.css';
const PlusMinusButton = ({ value = 1, onIncrease, onDecrease }) => {
  return (
    <div className="input-group">
      <button className="btn btn-outline-secondary" onClick={onDecrease}>-</button>
      <input type="text" className="form-control text-center" value={value} readOnly />
      <button className="btn btn-outline-secondary" onClick={onIncrease}>+</button>
    </div>
  );
};

const ProductDetail = () => {
  const productDetailItem = {
    images: [
      {
        original:
          "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
        thumbnail:
          "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        original:
          "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
        thumbnail:
          "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      // Add more images...
    ],
    title: "BIG ITALIAN SOFA",
    reviews: "150",
    availability: true,
    brand: "apex",
    category: "Sofa",
    sku: "BE45VGTRK",
    price: 450,
    previousPrice: 599,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem exercitationem voluptate sint eius ea assumenda provident eos repellendus qui neque! Velit ratione illo maiores voluptates commodi eaque illum, laudantium non!",
    size: ["XS", "S", "M", "L", "XL"],
    color: ["gray", "violet", "red"],
  };

  const [quantity, setQuantity] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0); // Index of the current image

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleImageSlide = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
      <ReactImageGallery
          items={productDetailItem.images}
          // showNav={false}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          slideInterval={0}
          startIndex={currentIndex}
          onSlide={handleImageSlide}
          additionalClass="product-detail-image-gallery"
        />
        <div className="card-body">
          <h5 className="card-title">{productDetailItem.title}</h5>
          <div className="card-text">
            {/* Product details */}
            <div className="mt-2">
              <p>Price: ${productDetailItem.price}</p>
              <p>
                Availability:{" "}
                {productDetailItem.availability ? (
                  <span className="text-success">In Stock</span>
                ) : (
                  <span className="text-danger">Out of Stock</span>
                )}
              </p>
            </div>
            <div className="mt-3">
              <PlusMinusButton
                value={quantity}
                onIncrease={handleIncreaseQuantity}
                onDecrease={handleDecreaseQuantity}
              />
            </div>
          </div>
          <div className="mt-4">
            <button className="btn btn-primary mr-2">
              <BiShoppingBag className="mr-2" />
              Add to Cart
            </button>
            <button className="btn btn-outline-secondary">
              <AiOutlineHeart className="mr-2" />
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



export default ProductDetail;