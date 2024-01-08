import meter1 from "../assets/img/pizza-tuesday.jpg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

import person1 from "../assets/img/1pic-work-01.jpg";
import person2 from "../assets/img/1pic-work-02.jpg";
import person3 from "../assets/img/1pic-work-03.jpg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
export const Reviews = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="review" id="reviews">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="review-bx wow zoomIn">
                        <h2>Reivews</h2>
                        <p>These are some of our Customers, from all walks of life.  lets hear what they have to say about out burgers<br></br>.</p>
                        <Carousel responsive={responsive} infinite={true}  autoPlay={false} autoPlaySpeed={1000} className="owl-carousel owl-theme review-slider">
                            <div className="item person">
                                <img src={person1} alt="Image" />
                                <h5>Chaltu A. Burger Enthusiast</h5>
                                <p>"I've tried burgers everywhere, but none compare to these! Perfectly grilled patties, fresh veggies, and the softest buns. I'm hooked!"</p>
                            </div>
                            <div className="item person">
                                <img src={person2} alt="Image" />
                                <h5>David S. - Foodie Extraordinaire</h5>
                                <p>"As a self-proclaimed burger critic, these burgers earn my highest praise! Incredible taste, generous portions, and every bite is an explosion of flavors!"</p>
                            </div>
                            <div className="item person">
                                <img src={person3} alt="Image" />
                                <h5>John M. - Happy Customer</h5>
                                <p>"Absolutely mouthwatering! Juicy, flavorful, and the toppings are always fresh. If you're a burger lover, you've got to taste these!"</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
