import { useEffect, useState } from "react";

const ProductList = () => {
  //state hook
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProduct = () => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((response) => {
        setProducts(response);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return loading ? (
    <WaitingData />
  ) : (
    products.map((product) => (
    
        <div className="container">
          <div className="row mt-4">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div class="card">
                <img src={product.images[0]} class="card-img-top" alt="..." />

                <div class="card-body">
                  <h5 class="card-title">{product.title}</h5>
                  <p class="card-text te">
                    {product.description}
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div class="card">
                <img src={product.images[1]} class="card-img-top" alt="..." />

                <div class="card-body">
                  <h5 class="card-title">{product.title}</h5>
                  <p class="card-text te">
                    {product.description}
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div class="card">
                <img src={product.images[2]} class="card-img-top" alt="..." />

                <div class="card-body">
                  <h5 class="card-title">{product.title}</h5>
                  <p class="card-text te">
                    {product.description}
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    ))
  );
};

function WaitingData() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-3 ">
            <div class="card" aria-hidden="true">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title placeholder-glow">
                  <span class="placeholder col-6"></span>
                </h5>   
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-7"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-6"></span>
                  <span class="placeholder col-8"></span>
                </p>
                <a class="btn btn-primary disabled placeholder col-6"></a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-3 ">
            <div class="card" aria-hidden="true">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title placeholder-glow">
                  <span class="placeholder col-6"></span>
                </h5>   
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-7"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-6"></span>
                  <span class="placeholder col-8"></span>
                </p>
                <a class="btn btn-primary disabled placeholder col-6"></a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-3 ">
            <div class="card" aria-hidden="true">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title placeholder-glow">
                  <span class="placeholder col-6"></span>
                </h5>   
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-7"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-6"></span>
                  <span class="placeholder col-8"></span>
                </p>
                <a class="btn btn-primary disabled placeholder col-6"></a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-3 ">
            <div class="card" aria-hidden="true">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title placeholder-glow">
                  <span class="placeholder col-6"></span>
                </h5>   
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-7"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-6"></span>
                  <span class="placeholder col-8"></span>
                </p>
                <a class="btn btn-primary disabled placeholder col-6"></a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-3 ">
            <div class="card" aria-hidden="true">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title placeholder-glow">
                  <span class="placeholder col-6"></span>
                </h5>   
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-7"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-6"></span>
                  <span class="placeholder col-8"></span>
                </p>
                <a class="btn btn-primary disabled placeholder col-6"></a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-3 ">
            <div class="card" aria-hidden="true">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title placeholder-glow">
                  <span class="placeholder col-6"></span>
                </h5>   
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-7"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-6"></span>
                  <span class="placeholder col-8"></span>
                </p>
                <a class="btn btn-primary disabled placeholder col-6"></a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-3 ">
            <div class="card" aria-hidden="true">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title placeholder-glow">
                  <span class="placeholder col-6"></span>
                </h5>   
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-7"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-6"></span>
                  <span class="placeholder col-8"></span>
                </p>
                <a class="btn btn-primary disabled placeholder col-6"></a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-3 ">
            <div class="card" aria-hidden="true">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title placeholder-glow">
                  <span class="placeholder col-6"></span>
                </h5>   
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-7"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-6"></span>
                  <span class="placeholder col-8"></span>
                </p>
                <a class="btn btn-primary disabled placeholder col-6"></a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-3 ">
            <div class="card" aria-hidden="true">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title placeholder-glow">
                  <span class="placeholder col-6"></span>
                </h5>   
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-7"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-6"></span>
                  <span class="placeholder col-8"></span>
                </p>
                <a class="btn btn-primary disabled placeholder col-6"></a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-3 ">
            <div class="card" aria-hidden="true">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title placeholder-glow">
                  <span class="placeholder col-6"></span>
                </h5>   
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-7"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-6"></span>
                  <span class="placeholder col-8"></span>
                </p>
                <a class="btn btn-primary disabled placeholder col-6"></a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-3 ">
            <div class="card" aria-hidden="true">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title placeholder-glow">
                  <span class="placeholder col-6"></span>
                </h5>   
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-7"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-6"></span>
                  <span class="placeholder col-8"></span>
                </p>
                <a class="btn btn-primary disabled placeholder col-6"></a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-3 ">
            <div class="card" aria-hidden="true">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title placeholder-glow">
                  <span class="placeholder col-6"></span>
                </h5>   
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-7"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-6"></span>
                  <span class="placeholder col-8"></span>
                </p>
                <a class="btn btn-primary disabled placeholder col-6"></a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-3 ">
            <div class="card" aria-hidden="true">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title placeholder-glow">
                  <span class="placeholder col-6"></span>
                </h5>   
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-7"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-6"></span>
                  <span class="placeholder col-8"></span>
                </p>
                <a class="btn btn-primary disabled placeholder col-6"></a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-3 ">
            <div class="card" aria-hidden="true">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title placeholder-glow">
                  <span class="placeholder col-6"></span>
                </h5>   
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-7"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-6"></span>
                  <span class="placeholder col-8"></span>
                </p>
                <a class="btn btn-primary disabled placeholder col-6"></a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-3 ">
            <div class="card" aria-hidden="true">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title placeholder-glow">
                  <span class="placeholder col-6"></span>
                </h5>   
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-7"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-6"></span>
                  <span class="placeholder col-8"></span>
                </p>
                <a class="btn btn-primary disabled placeholder col-6"></a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-3 ">
            <div class="card" aria-hidden="true">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title placeholder-glow">
                  <span class="placeholder col-6"></span>
                </h5>   
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-7"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-6"></span>
                  <span class="placeholder col-8"></span>
                </p>
                <a class="btn btn-primary disabled placeholder col-6"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;