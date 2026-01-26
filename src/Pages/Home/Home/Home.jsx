import React from 'react';
import Banner from '../Banner/Banner';
import ServiceCard from '../ServiceCard/ServiceCard';
import TestimonialsSection from '../Testimonials/TestimonialsSection';
import HowItWorks from '../HowItWorks/HowItWorks';
import CallToAction from '../CallToAction/CallToAction';
import TrustFooter from '../TrustFooter/TrustFooter';
import HelpRequest from '../HelpRequests/HelpRequest';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceCard></ServiceCard>
            <HowItWorks></HowItWorks>
            <HelpRequest></HelpRequest>
            <CallToAction></CallToAction>
            <TestimonialsSection></TestimonialsSection>
            <TrustFooter></TrustFooter>
            
        </div>
    );
};

export default Home;