import React, { FC, ReactElement } from "react";
import SliderWorks from "../component/SliderWorks";
import HowWork from "../component/HowWork";
import SubCalculation from "../component/SubCalculation";
import Footer from "../component/Footer";
import Contacts from "../component/Contacts";
import Header from "../component/Header";
import OurWork from "../component/OurWork";
import Review from "../component/Review";
import OurTeam from "../component/OurTeam";
import WhyWe from "../component/WhyWe";
import Service from "../component/Service";
import Calculation from "../component/Calculation";
import WhyInfo from "../component/WhyInfo";
import HeaderContent from "../component/HeaderContent";
export default function Main<T extends FC>(): ReactElement {
    return (
        <main>
            <Header />
            <HeaderContent />
            <Service />
            <Calculation />
            <SliderWorks />
            <HowWork />
            <SubCalculation />
            <WhyWe />
            <WhyInfo />
            <OurTeam />
            <OurWork />
            <Review />
            <Contacts />
            <Footer />
        </main>
    )
}