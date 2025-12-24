import React from 'react';
import Banner from '../Banner/Banner';
import ServiceCard from '../ServiceCard/ServiceCard';
import TestimonialsSection from '../Testimonials/TestimonialsSection';
import Footer from '../../../Shared/Footer';
import LiveCampaigns from '../LiveCampaigns/LiveCampaigns';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceCard></ServiceCard>
            <LiveCampaigns></LiveCampaigns>
            {/* <CallToAction></CallToAction> */}
            <TestimonialsSection></TestimonialsSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;