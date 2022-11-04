import React from 'react';
import Banner from '../Banner/Banner';
import QualifyAndService from '../QualifyAndService/QualifyAndService';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <QualifyAndService></QualifyAndService>
            <Services></Services>
        </div>
    );
};

export default Home;