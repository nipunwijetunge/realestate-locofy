import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import Area from "../components/area";
import AreaFeatureCard from "../components/area-feature-card";
import RentPropertiesContainer from "../components/rent-properties-container";
import RentPropertiesForm from "../components/rent-properties-form";
import Contact from "../components/contact";
import FooterSection from "../components/footer-section";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="Discover your perfect home" />
      </Head>
      <div className="relative bg-gray-white w-full flex flex-col items-center justify-start">
        <Header hamburger={false} />
        <Hero />
        <Area />
        <AreaFeatureCard />
        <RentPropertiesContainer />
        <RentPropertiesForm />
        <Contact />
        <FooterSection />
      </div>
    </>
  );
};

export default LandingPage;
