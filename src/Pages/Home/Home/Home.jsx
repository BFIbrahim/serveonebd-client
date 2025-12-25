import React from 'react';
import Banner from '../Banner/Banner';
import ServiceCard from '../ServiceCard/ServiceCard';
import TestimonialsSection from '../Testimonials/TestimonialsSection';
import LiveCampaigns from '../LiveCampaigns/LiveCampaigns';
import HowItWorks from '../HowItWorks/HowItWorks';
import CallToAction from '../CallToAction/CallToAction';
import TrustFooter from '../TrustFooter/TrustFooter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceCard></ServiceCard>
            <LiveCampaigns></LiveCampaigns>
            <HowItWorks></HowItWorks>
            <CallToAction></CallToAction>
            <TestimonialsSection></TestimonialsSection>
            <TrustFooter></TrustFooter>
            
        </div>
    );
};

export default Home;