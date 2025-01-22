import AboutSection from "./About";
import FAQSection from "./FaqPage";

import BlogCards from "./BlogCards";

import HeroSection from "./HeroSection";
import Services from "./NewSeicves";

import PartnersSection from "./PartnersSection";
import TestimonialSection from "./TestimonialSection ";

import WhyChooseUs from "./WhyChooseUs";

import TestimonialSwiper from "./TestimonialSwiper";
import HappyClient from "./HappyClient";

function Home() {
  return (
    <div>
      <HeroSection />
      <Services />
      <AboutSection />
      <WhyChooseUs />
      <HappyClient />
      <BlogCards />
      <TestimonialSwiper />
      <PartnersSection />

      <FAQSection />

      <TestimonialSection />
    </div>
  );
}

export default Home;
