import React from 'react';
import GovtBanner from "../../components/uswds/GovtBanner";
import SiteLogo from "../../components/SiteLogo";
import Footer from "../../components/uswds/Footer";

const MainLayout = ({ children }) => {

    return (
        <div>
            <GovtBanner/>
            <div style={{textAlign: 'center', margin: '24px 0 0 0'}}><SiteLogo/></div>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default MainLayout;
