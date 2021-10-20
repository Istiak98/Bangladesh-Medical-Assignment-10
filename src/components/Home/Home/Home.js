import React from 'react';
import Header from '../Header/Header'
import Review from '../Review/Review';
import Services from '../Services/Services';
import Support from '../Support/Support';
import Work from '../Work/Work';
import Medi from '../Medi/Medi';
const Home = () => {
    return (
        <div>
         <Header></Header>
         <Services></Services>
         <Support></Support>
         <Work></Work>
         <Review></Review>
         <Medi></Medi>
        </div>
    );
};

export default Home;