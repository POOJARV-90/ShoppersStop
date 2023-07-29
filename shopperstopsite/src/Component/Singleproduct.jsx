import React, { useEffect, useState } from "react";
import "../Component/Singleproduct.css";
import { useParams } from "react-router-dom";

const Singleproduct = () => {
  const [isuserlogin, setisuserLogin] = useEffect(false);
  const [product, setProduct] = useState([]);
  const [singleproduct, setSingleproduct] = useState({});
  const [currentUserEmail, setCurrentUserEmail] = useState("");  //new
  const { id } = useParams();
  console.log(product);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      // .then(json=>console.log(json))
      .then((json) => setProduct(json));
  }, []);

  useEffect(() => {
    if (id && product.length) {
      const productdata = product.find((product) => product.id == id);
      // console.log(productdata,"singlepoduct")
      setSingleproduct(productdata);
    }

    console.log(singleproduct, "singlepoduct");
  }, [id, product]);
// ..............newww..........
  useEffect(() => {
    var user = JSON.parse(localStorage.setItem("CurrentUser"));
    if (user) {
      setisuserLogin(true);
      setCurrentUserEmail(user.email)
    }
  }, []);

  function addCart() {
    if (isuserlogin) {

    } else {
      alert("login first");
    }
  }

  return (
    <div id="main-body">
      <p>
        Home / Men / Clothing / Shirts / Casual Shirts / LIFE Solid Cotton Slim
        Fit Mens Shirt
      </p>

      <div id="container">
        <div id="container-left">
          <div>
            <div>
              <img src={singleproduct.image} />
            </div>
            <div>
              <img src={singleproduct.image} />
            </div>
          </div>

          <div>
            <img src={singleproduct.image} />
          </div>
        </div>
        <div id="container-right">
          <h5 className="class-for-between-space">
            {" "}
            <span>{singleproduct.category}</span>{" "}
            <span>
              4.5 <i class="fa-solid fa-star"></i>{" "}
            </span>{" "}
          </h5>
          <p>{singleproduct.title}</p>

          <p>{singleproduct.description}</p>

          <span>{singleproduct.price} $</span>
          <span>
            <s>144$</s>
          </span>
          <span>50% off</span>

          <p>
            Find your perfect <u>match! Ask your Expert Advisor</u>{" "}
          </p>

          <h5 className="class-for-between-space">
            {" "}
            <span>Size</span>{" "}
            <span>
              {" "}
              <u>size chart</u>{" "}
            </span>{" "}
          </h5>

          <div id="size">
            <span>LARGE</span>
            <span>MEDIUM</span>
            <span>SMALL</span>
            <span>X-LARGE</span>
          </div>

          <p>14 days easy return and exchange applicable for this item</p>
          <div id="share">
            <span>
              {" "}
              <img
                src="data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M6 9.563a2.437 2.437 0 1 0 0 4.874 2.437 2.437 0 0 0 0-4.874zM2.437 12a3.563 3.563 0 1 1 7.126 0 3.563 3.563 0 0 1-7.126 0zM16.5 16.313a2.437 2.437 0 1 0 0 4.874 2.437 2.437 0 0 0 0-4.875zm-3.563 2.437a3.563 3.563 0 1 1 7.126 0 3.563 3.563 0 0 1-7.125 0zM16.5 2.813a2.437 2.437 0 1 0 0 4.874 2.437 2.437 0 0 0 0-4.875zM12.937 5.25a3.563 3.563 0 1 1 7.126 0 3.563 3.563 0 0 1-7.125 0z' fill='%23000'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.45 6.568a.562.562 0 0 1-.17.777l-5.453 3.506a.563.563 0 0 1-.608-.946l5.454-3.506a.562.562 0 0 1 .777.169zM8.05 13.318a.563.563 0 0 1 .777-.17l5.454 3.507a.562.562 0 1 1-.609.946L8.22 14.095a.563.563 0 0 1-.169-.777z' fill='%23000'/%3E%3C/svg%3E"
                alt=""
              />
            </span>
            <span>
              {" "}
              <img
                src="data:image/svg+xml,%0A%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23fff' d='M0 0h24v24H0z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.593 21.48c.117.09.26.14.407.14.147 0 .29-.05.407-.14 3.706-2.88 6.26-5.36 8.046-7.807 2.28-3.126 2.8-6.013 1.547-8.58-.893-1.833-3.467-3.32-6.46-2.46A6.58 6.58 0 0 0 12 5.147a6.58 6.58 0 0 0-3.54-2.514c-3-.873-5.567.627-6.46 2.46-1.253 2.567-.733 5.454 1.547 8.58 1.786 2.447 4.34 4.927 8.046 7.807zM3.2 5.673A3.933 3.933 0 0 1 6.753 3.72c.452.002.9.067 1.334.193a5.287 5.287 0 0 1 3.293 2.8.667.667 0 0 0 1.233 0 5.333 5.333 0 0 1 3.294-2.8c2.226-.626 4.226.434 4.893 1.767 1.033 2.113.573 4.473-1.427 7.207A38.087 38.087 0 0 1 12 20.107a38.088 38.088 0 0 1-7.373-7.227C2.633 10.153 2.167 7.793 3.2 5.673z' fill='%23000'/%3E%3C/svg%3E%0A"
                alt=""
              />
            </span>
            <button onClick={addCart}>ADD TO BAG</button>
          </div>
        </div>
      </div>

      <div className="head">Handpicked For You</div>

      <div id="top-selling-pro-slide">
        <div>
          <img
            src="https://sslimages.shoppersstop.com/sys-master/images/hcc/h67/14999824990238/205523390_BLACK.jpg_136Wx204H"
            alt=""
          />
          <h5>Levis</h5>
          <p>Women's Round Neck Graphic Print T-Shirt</p>
          <span>₹999</span>
          <span>₹1099</span>
          <span>50%off</span>

          <p>add to bag</p>
        </div>
        <div>
          <img
            src="https://sslimages.shoppersstop.com/sys-master/images/hf9/h9c/26734120435742/WFIF-FTW6077_NoColour.jpg_136Wx204H"
            alt=""
          />
          <h5>Levis</h5>
          <p>Women's Round Neck Graphic Print T-Shirt</p>
          <span>₹999</span>
          <span>₹1099</span>
          <span>50%off</span>

          <p>add to bag</p>
        </div>
        <div>
          <img
            src="https://sslimages.shoppersstop.com/sys-master/images/h3d/h0c/28158196056094/INFLWDSTAR_STONE.jpg_136Wx204H"
            alt=""
          />
          <h5>Levis</h5>
          <p>Women's Round Neck Graphic Print T-Shirt</p>
          <span>₹999</span>
          <span>₹1099</span>
          <span>50%off</span>

          <p>add to bag</p>
        </div>
        <div>
          <img
            src="https://sslimages.shoppersstop.com/sys-master/images/h8c/hf2/15002510229534/205523388_WHITE.jpg_136Wx204H"
            alt=""
          />
          <h5>Levis</h5>
          <p>Women's Round Neck Graphic Print T-Shirt</p>
          <span>₹999</span>
          <span>₹1099</span>
          <span>50%off</span>

          <p>add to bag</p>
        </div>

        <div>
          <img
            src="https://sslimages.shoppersstop.com/sys-master/images/hb0/h2f/27857327587358/206837457_RED.jpg_136Wx204H"
            alt=""
          />
          <h5>Levis</h5>
          <p>Women's Round Neck Graphic Print T-Shirt</p>
          <span>₹999</span>
          <span>₹1099</span>
          <span>50%off</span>

          <p>add to bag</p>
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;
