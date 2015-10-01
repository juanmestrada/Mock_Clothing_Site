console.log('javascript is working')

// es5 polyfills, powered by es5-shim
require("es5-shim")

// es6 polyfills, powered by babel
require("babel/polyfill")

var Promise = require('es6-promise').Promise

import $ from 'jquery'
import Backbone from 'backbone'
import React, {Component} from 'react'

import _ from 'underscore'





//Function for parallax responsiveness

$(document).ready(function(){

  
        $(window).scroll(function() {
            var parallax = $(this).scrollTop();

            $('.title').css('transform', 'translate(0px, '+ parallax / 8 + '%)')
            $('.model').css('transform', 'translate(0px, -'+ parallax / 15 + '%)')


            if(parallax > $('.apparel').offset().top - ($(window).height() / 2)) {
                console.log('at the top')
                $('.apparel div').each(function(i) {

                    setTimeout(function(){
                        $('.apparel div').eq(i).addClass('is-showing');
                    }, 150 * (i+1));
                });

            }
            
        });
        
        

        
})


$( window ).resize(function() {
    var $window = $(window);
    
    if( $window .width() < 500){
            
        }
});
/*

    

*/




//Parallax Header

class Header extends React.Component{
    render() {
        return (<div>
                <header>
                    <div className="title"></div>
                    <div className="model"></div>
                </header>
            </div>
        )
    }
}

//Footer

class Footer extends React.Component{
    render() {
        return (<div>
                <footer>
                    <div className="footer-container">
                        <div className="links">
                            <h4>Follow Us On:</h4>
                             <ul>
                                <li><a href="https://twitter.com/jestradaf22"><img src="../images/TwitterLogo.png"/><p>Twitter</p></a></li>
                                <li><a href="https://github.com/juanmestrada"><img src="../images/github.png"/><p>Github</p></a></li>
                                <li><a href="https://www.linkedin.com/pub/juan-estrada/101/31b/575"><img src="../images/linkedin_logo.png"/><p>Portfolio</p></a></li>
                            </ul>
                        </div>
                        <div className="stuff">
                            <h4>Navigate</h4>
                            <ul>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Jobs</li>
                            </ul>
                        </div>
                        <div className="newsletter">
                            <h4>Sign Up To Our Newsletter</h4>
                            <h8>Subcsribe to recieve special announcements and season promotions</h8>
                            <form>
                                <input type="text" placeholder="Email"></input>
                                <input type="button" value="Submit"></input>
                            </form>
                            
                        </div>
                    </div>  
                    <div className="copyright"><p>Copyright © 2015 Juan Estrada</p></div> 
                </footer>
        </div>  
        )
    }
}

//Home Screen

class HomeView extends React.Component{
    render() {
        return (<div>
            <Header></Header>
        
    <div className="about">
        <div className="navbar">
            <span><h4><strong>Shop:</strong></h4></span>
            <span><a href={`#mens`}>Mens Apparel</a></span>
            <span><a href={`#womens`}>Womens Apparel</a></span>
            <span>Children</span>
        </div>
        <h3>New Fall Line Up</h3>
        
        <hr/>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
        <hr/>
        
        <div className="apparel">
            <div className="grid grid-2-400 grid-4-800 apparel-grid">
                <div><img src="./images/male5.jpg"/><p>Black Suit -<strong>$150</strong></p></div>
                <div><img src="./images/male2.jpg"/><p>Slim Suit -<strong>$150</strong></p></div>
                <div><img src="./images/male3.jpg"/><p>Business Casual -<strong>$130</strong></p></div>
                <div><img src="./images/male4.jpg"/><p>Tuxedo -<strong>$150</strong></p></div>
                
            </div>
            <div className="grid grid-2-400 grid-4-800 apparel-grid">
                <div><img src="./images/woman2.jpeg"/><p>Business Casual -<strong>$99</strong></p></div>
                <div><img src="./images/woman3.jpg"/><p>Coat/Scarf -<strong>$139</strong></p></div>
                <div><img src="./images/woman6.jpeg"/><p>Mini Skirt -<strong>$89</strong></p></div>
                <div><img src="./images/womanfashion.jpeg"/><p>Black Dress -<strong>$99</strong></p></div>
            </div>
            
        </div>
    </div>
    
        <Footer></Footer>
    </div>
        )
    }
}

//Male Details Page
class MaleView extends React.Component{
    render(){
        return (
            <div>
                
        
    <div className="details-about">
        <div className="navbar">
            <span className="home-logo"><h4><strong><a href={`#home`}>Home</a></strong></h4></span>
            <span className="shop"><h4><strong>Shop:</strong></h4></span>
            <span><a href={`#mens`}>Mens Apparel</a></span>
            <span><a href={`#womens`}>Womens Apparel</a></span>
            <span>Children</span>
        </div>
        

        <div className="categories">
                <ul>
                    <p><strong>Suits</strong></p>
                    <li>Shirts</li>
                    <li>Jackets</li>
                    <li>Coats</li>
                </ul>
                <ul>
                    <p><strong>Bottoms</strong></p>
                    <li>Slacks</li>
                    <li>Jeans</li>
                    <li>Pants</li>
                </ul>
                <ul>
                    <p><strong>Casual</strong></p>
                    <li>T-Shirts</li>
                    <li>Sweatshirt</li>
                    <li>Beachwear</li>
                </ul>
                <ul>
                    <p><strong>Footwear</strong></p>
                    <li>Sneakers</li>
                    <li>Sandals</li>
                    <li>Boots</li>
                </ul>
            </div>
        <div className="apparel  details-grid">
        <h3><strong>Mens Suits</strong></h3>
            <div className="grid grid-2-400 grid-4-800 apparel-grid">
                <div><img src="./images/suit.jpg"/><p>Tuxedo -<strong>$150</strong></p></div>
                <div><img src="./images/suit.jpg"/><p>Tuxedo -<strong>$150</strong></p></div>
                <div><img src="./images/suit.jpg"/><p>Tuxedo -<strong>$150</strong></p></div>
                <div><img src="./images/suit.jpg"/><p>Tuxedo -<strong>$150</strong></p></div>
                
            </div>
            <div className="grid grid-2-400 grid-4-800 apparel-grid">
                <div><img src="./images/suit.jpg"/><p>Tuxedo -<strong>$150</strong></p></div>
                <div><img src="./images/suit.jpg"/><p>Tuxedo -<strong>$150</strong></p></div>
                <div><img src="./images/suit.jpg"/><p>Tuxedo -<strong>$150</strong></p></div>
                <div><img src="./images/suit.jpg"/><p>Tuxedo -<strong>$150</strong></p></div>
            </div>
            
        </div>
    </div>
    
        <Footer></Footer>
            </div>
        )
    }
}
//Female Details Page
class FemaleView extends React.Component{
    render(){
        return (
            <div>
                
        
    <div className="details-about">
        <div className="navbar">
            <span className="home-logo"><h4><strong><a href={`#home`}>Home</a></strong></h4></span>
            <span className="shop"><h4><strong>Shop:</strong></h4></span>
            <span><a href={`#mens`}>Mens Apparel</a></span>
            <span><a href={`#womens`}>Womens Apparel</a></span>
            <span>Children</span>
        </div>
        

        <div className="categories">
                <ul>
                    <p><strong>Dresses</strong></p>
                    <li>Blouses & Tops</li>
                    <li>Jackets</li>
                    <li>Coats</li>
                </ul>
                <ul>
                    <p><strong>Bottoms</strong></p>
                    <li>Skirts</li>
                    <li>Jeans</li>
                    <li>Pants</li>
                </ul>
                <ul>
                    <p><strong>Casual</strong></p>
                    <li>T-Shirts</li>
                    <li>Sweatshirt</li>
                    <li>Beachwear</li>
                </ul>
                <ul>
                    <p><strong>Footwear</strong></p>
                    <li>Sneakers</li>
                    <li>Sandals</li>
                    <li>Boots</li>
                    <li>Pumps</li>
                    <li>Flats</li>
                </ul>
            </div>
        <div className="apparel details-grid">
        <h3><strong>Women's Fall Wear</strong></h3>
            <div className="grid grid-2-400 grid-4-800 apparel-grid ">
                <div><img src="./images/womanfashion.jpeg"/><p>Black Dress -<strong>$99</strong></p></div>
                <div><img src="./images/womanfashion.jpeg"/><p>Black Dress -<strong>$99</strong></p></div>
                <div><img src="./images/womanfashion.jpeg"/><p>Black Dress -<strong>$99</strong></p></div>
                <div><img src="./images/womanfashion.jpeg"/><p>Black Dress -<strong>$99</strong></p></div>
                
            </div>
            <div className="grid grid-2-400 grid-4-800 apparel-grid ">
                <div><img src="./images/womanfashion.jpeg"/><p>Black Dress -<strong>$99</strong></p></div>
                <div><img src="./images/womanfashion.jpeg"/><p>Black Dress -<strong>$99</strong></p></div>
                <div><img src="./images/womanfashion.jpeg"/><p>Black Dress -<strong>$99</strong></p></div>
                <div><img src="./images/womanfashion.jpeg"/><p>Black Dress -<strong>$99</strong></p></div>
            </div>
            
        </div>
    </div>
    
        <Footer></Footer>
            </div>
        )
    }
}

// Router
var PageRouter = Backbone.Router.extend({
    routes: {
        'mens': 'male',
        'womens': 'female',
        'home': 'home',
        '*default': 'home'
    },
    male: ()=>{
        React.render(<MaleView />, document.body);
    },
    female: ()=>{
        React.render(<FemaleView />, document.body);
    },
    home: ()=>{
        React.render(<HomeView />, document.body);
    },
    initialize: function() {
        Backbone.history.start();
    }
});

var router = new PageRouter();
