import React from 'react'
import "./footer.css"
import "./css/bootstrap.min.css"
import "./css/elegant-icons.css"
import "./css/font-awesome.min.css"
import "./css/magnific-popup.css"
import "./css/nice-select.css"
import "./css/owl.carousel.min.css"


function Footer() {
  return (
   <div className=''>
     <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="footer__about">
                        <div className="footer__logo">
                            <a href="#"><img src="img/footer-logo.png" alt=""/></a>
                        </div>
                        <p>The customer is at the heart of our unique business model, which includes shopping.</p>
                        <a href="#"><img src="img/payment.png" alt=""/></a>
                    </div>
                </div>
                <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                    <div className="footer__widget">
                        <h6>Shopping</h6>
                        <ul>
                            <li><a href="#">Clothing Store</a></li>
                            <li><a href="#">Trending Shoes</a></li>
                            <li><a href="#">Accessories</a></li>
                            <li><a href="#">Sale</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6">
                    <div className="footer__widget">
                        <h6>Shopping</h6>
                        <ul>
                            {/* <li><a href="#">Contact Us</a></li> */}
                            <li><a href="#">Payment Methods</a></li>
                            <li><a href="#">Delivary</a></li>
                            <li><a href="#">Return & Exchanges</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                    <div className="footer__widget">
                        <h6>NewLetter</h6>
                        <div className="footer__newslatter">
                            <p>Be the first to know about new arrivals, look books, sales & promos!</p>
                            {/* <form action="#">
                                <input type="text" placeholder="Your email"/>
                                <button type="submit"><span className="icon_mail_alt"></span></button>
                            </form> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="footer__copyright__text">
                        
                        <p>Copyright ©
                            <script>
                                document.write(new Date().getFullYear());
                            </script>2024
                            All rights reserved | This website  is made with <i className="fa fa-heart-o"
                            aria-hidden="true"></i> by <a href="https://omarmifta.netlify.app/" target="_blank">Group 5</a>
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    </footer>
    
   </div>
  )
}

export default Footer