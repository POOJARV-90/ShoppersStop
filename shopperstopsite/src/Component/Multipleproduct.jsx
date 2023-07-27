import React, { useEffect, useState } from "react";
import "../Component/Multipleproduct.css";
import { useNavigate } from "react-router-dom";

const Multipleproduct = () => {
  const [product, setProduct] = useState([]);
  const router = useNavigate();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      // .then(json=>console.log(json))
      .then((json) => setProduct(json));
  }, []);

  const redirect = (id) => {
    alert("working")
    // console.log(id,"id")
    router(`/Singleproduct/${id}`)

  }

  return (
    <>
      <div id="app-pro-head">
        <p>Home / Men / Clothing / Shirts</p>

        <div>
          <img
            src="https://cdn.dynamicyield.com/api/8770829/images/20f2e22dd861b__plp--casual-trousers------web---static.jpg"
            alt=""
          />
        </div>
      </div>
      <div id="app-pro-body">
        <div id="left">
          <div>
            <h5>
              {" "}
              <span>SUB-CATEGORIES</span>{" "}
              <span>
                <i class="fa-solid fa-chevron-down"></i>
              </span>{" "}
            </h5>
            <p>
              <input type="checkbox" />{" "}
              <label htmlFor="">CASUAL SHIRTS (5,764)</label>
            </p>
            <p>
              <input type="checkbox" />{" "}
              <label htmlFor=""> SHIRTS (5,064)</label>
            </p>
          </div>

          <div>
            <h5>
              {" "}
              <span>BRANDS</span>{" "}
              <span>
                <i class="fa-solid fa-chevron-down"></i>
              </span>{" "}
            </h5>
            <div>
              <input type="search" placeholder="search" />
              <img
                src="data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.875 3.563a7.312 7.312 0 1 0 0 14.624 7.312 7.312 0 0 0 0-14.625zm-8.438 7.312a8.437 8.437 0 1 1 16.875 0 8.437 8.437 0 0 1-16.875 0z' fill='%23000'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16.045 16.046c.22-.22.576-.22.796 0l4.556 4.556a.562.562 0 1 1-.795.796l-4.557-4.556a.562.562 0 0 1 0-.796z' fill='%23000'/%3E%3C/svg%3E"
                alt=""
              />
            </div>
            <p>
              <input type="checkbox" />{" "}
              <label htmlFor="">ADIDAS  (65)</label>
            </p>
            <p>
              <input type="checkbox" />{" "}
              <label htmlFor="">AEROPOSTALE  (2)</label>
            </p>
            <p>
              <input type="checkbox" />{" "}
              <label htmlFor="">ALCIS  (3)</label>
            </p>
            <p>
              <input type="checkbox" />{" "}
              <label htmlFor="">ALLEN SOLLY  (78)</label>
            </p>
          </div>

          <div>
            <h5>
              {" "}
              <span>OFFERS</span>{" "}
              <span>
                <i class="fa-solid fa-chevron-down"></i>
              </span>{" "}
            </h5>
            <div>
              <input type="search" placeholder="search" />
              <img
                src="data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.875 3.563a7.312 7.312 0 1 0 0 14.624 7.312 7.312 0 0 0 0-14.625zm-8.438 7.312a8.437 8.437 0 1 1 16.875 0 8.437 8.437 0 0 1-16.875 0z' fill='%23000'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16.045 16.046c.22-.22.576-.22.796 0l4.556 4.556a.562.562 0 1 1-.795.796l-4.557-4.556a.562.562 0 0 1 0-.796z' fill='%23000'/%3E%3C/svg%3E"
                alt=""
              />
            </div>
            <p>
              <input type="checkbox" />{" "}
              <label htmlFor="">FLAT 30% OFF  (47)</label>
            </p>
            <p>
              <input type="checkbox" />{" "}
              <label htmlFor="">FLAT 70% OFF  (129)</label>
            </p>
            <p>
              <input type="checkbox" />{" "}
              <label htmlFor="">FLAT 40% OFF  (38)</label>
            </p>
            <p>
              <input type="checkbox" />{" "}
              <label htmlFor="">FLAT 30% OFF   (234)</label>
            </p>
            <p>
              <input type="checkbox" />{" "}
              <label htmlFor="">FLAT 50% OFF  (38)</label>
            </p>
            <p>
              <input type="checkbox" />{" "}
              <label htmlFor="">FLAT 70% OFF   (234)</label>
            </p>
          </div>

          <div>
            <h5>
              {" "}
              <span>SIZE</span>{" "}
              <span>
                <i class="fa-solid fa-chevron-down"></i>
              </span>{" "}
            </h5>
            <div>
              <input type="search" placeholder="search" />
              <img
                src="data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.875 3.563a7.312 7.312 0 1 0 0 14.624 7.312 7.312 0 0 0 0-14.625zm-8.438 7.312a8.437 8.437 0 1 1 16.875 0 8.437 8.437 0 0 1-16.875 0z' fill='%23000'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16.045 16.046c.22-.22.576-.22.796 0l4.556 4.556a.562.562 0 1 1-.795.796l-4.557-4.556a.562.562 0 0 1 0-.796z' fill='%23000'/%3E%3C/svg%3E"
                alt=""
              />
            </div>
            <p>
              <input type="checkbox" />{" "}
              <label htmlFor="">1  (54)</label>
            </p>
            <p>
              <input type="checkbox" />{" "}
              <label htmlFor="">11-12 Y  (1)</label>
            </p>
            <p>
              <input type="checkbox" />{" "}
              <label htmlFor="">13-14 Y  (1)</label>
            </p>
            <p>
              <input type="checkbox" />{" "}
              <label htmlFor="">15-16 Y  (1)</label>
            </p>
          </div>
        </div>
        <div id="right">
          <div>
            <h1>
              {" "}
              <span>Shirts For Men</span> <small>( 6841 Products )</small>{" "}
            </h1>
            <h5>
              {" "}
              <span>SORT BY:POPULAR</span>{" "}
              <span>
                <i class="fa-solid fa-chevron-down"></i>
              </span>{" "}
            </h5>
          </div>
          <div>
            <h5 className="FILTER">
              {" "}
              <span>SLEEVES</span>{" "}
              <span>
                <i class="fa-solid fa-chevron-down"></i>
              </span>{" "}
            </h5>
            <h5 className="FILTER">
              {" "}
              <span>NECKLINE</span>{" "}
              <span>
                <i class="fa-solid fa-chevron-down"></i>
              </span>{" "}
            </h5>
            <h5 className="FILTER">
              {" "}
              <span>OCCASION</span>{" "}
              <span>
                <i class="fa-solid fa-chevron-down"></i>
              </span>{" "}
            </h5>
          </div>

          <div id="multiple-products">
            {product.map((pro) => (
              <div>
                <div onClick={() =>redirect (pro.id)}>
                  <img src={pro.image} />
                  <img
                    src="data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.593 21.48c.117.09.26.14.407.14.147 0 .29-.05.407-.14 3.706-2.88 6.26-5.36 8.046-7.807 2.28-3.126 2.8-6.013 1.547-8.58-.893-1.833-3.467-3.32-6.46-2.46A6.58 6.58 0 0 0 12 5.147a6.58 6.58 0 0 0-3.54-2.514c-3-.873-5.567.627-6.46 2.46-1.253 2.567-.733 5.454 1.547 8.58 1.786 2.447 4.34 4.927 8.046 7.807zM3.2 5.673A3.933 3.933 0 0 1 6.753 3.72c.452.002.9.067 1.334.193a5.287 5.287 0 0 1 3.293 2.8.667.667 0 0 0 1.233 0 5.333 5.333 0 0 1 3.294-2.8c2.226-.626 4.226.434 4.893 1.767 1.033 2.113.573 4.473-1.427 7.207A38.085 38.085 0 0 1 12 20.107a38.085 38.085 0 0 1-7.373-7.227C2.633 10.153 2.167 7.793 3.2 5.673z' fill='%23333'/%3E%3C/svg%3E"
                    alt=""
                  />
                  <span>
                    {" "}
                    <i class="fa-solid fa-star fa-xs"></i>
                    {pro.rating.rate}{" "}
                  </span>
                </div>
                <span>{pro.category}</span>
                <p>{pro.title}</p>
                <span> {pro.price} $</span> <span>100$</span>{" "}
                <span>50%off</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Multipleproduct;
