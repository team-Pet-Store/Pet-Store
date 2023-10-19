<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" />

<div class="container">
    <div class="row mt-n5">
      <div *ngFor="let product of products" class="col-md-6 col-lg-4 mt-5 wow fadeInUp" data-wow-delay=".2s"
        style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
        <div class="blog-grid">
          <div class="blog-grid-img position-relative mt-5">
            <img alt="img" [src]="product.imageUrl" class="img-fluid" />
          </div>
          <div class="blog-grid-text p-4">
            <h3 class="h5 mb-3"><a href="#!">{{product.name}}</a></h3>
            <p class="display-30">{{product.description.substring(0, 93)}}...</p>
            <div class="meta meta-style2">
              <ul>

                <li><a href="#!">${{product.price}}</a></li>
              </ul>
              <ul>
                <li><button class="checkout-button" >Add to cart</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div >