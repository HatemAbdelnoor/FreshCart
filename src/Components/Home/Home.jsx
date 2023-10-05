import React from 'react';
import './Home.module.css';
import MainSlider from '../MainSlider/MainSlider';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import CategorySlider from '../CategorySlider/CategorySlider';
import Footer from './../Footer/Footer';
 
function Home (){

return<>
<div className=" container-fluid ">

<MainSlider/>
<CategorySlider/>
<FeaturedProducts/>
<Footer/>
</div>
</>

};

export default Home;
