import React from 'react';
import Banner from '../Banner/Banner';
import ServiceCard from '../ServiceCard/ServiceCard';
import ImpactSection from '../ImpactSection/ImpactSection';
import CallToAction from '../CallToAction/CallToAction';
import TestimonialsSection from '../Testimonials/TestimonialsSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceCard></ServiceCard>
            <ImpactSection></ImpactSection>
            <CallToAction></CallToAction>
            <TestimonialsSection></TestimonialsSection>
        </div>
    );
};

export default Home;