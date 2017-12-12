import React, { Component } from 'react';
import Slider from 'react-slick';
import { Grid, Segment} from 'semantic-ui-react';
import MoviesRunningCard from './MoviesRunningCard'

export default class MoviesRunningCarousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      }]
    };
    return (
      <div className="MoviesRunningCarousel">
      <h2 id="MoviesRunningHeader">Movies Running  </h2> 
        <Slider {...settings}>

          <div> <MoviesRunningCard/> </div>
          <div>  <MoviesRunningCard/> </div>
          <div>  <MoviesRunningCard/> </div>
          <div>  <MoviesRunningCard/> </div>
          <div>  <MoviesRunningCard/> </div>
          <div>  <MoviesRunningCard/> </div>
          <div>  <MoviesRunningCard/> </div>
          <div>  <MoviesRunningCard/> </div>
        </Slider>

      </div>

    );
  }
};
