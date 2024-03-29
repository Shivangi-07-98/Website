import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home'
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import ProjectsNew from './components/Projects New/ProjectsNew';
import Team from './components/Team/Team';
import Career from './components/Career/Career';
import Contact from './components/Contact/Contact';

// services
import Web_Design_and_Development from './components/Services/Web Design/Web_Design_and_Development';
import Mobile_App_Development from './components/Services/mobile-app/Mobile_App_Development';
import E_Commerce_and_Retail from './components/Services/e-commerce/E_Commerce_and_Retail';
import Artificial_Intelligence_and_Machine_Learning from './components/Services/ai-ml/Artificial_Intelligence_and_Machine_Learning';
import Custom_Software_Development from './components/Services/custom-software/Custom_Software_Development';
import Enterprise_Software_Development from './components/Services/enterprise-software/Enterprise_Software_Development';

// hire us
import Hire_Dedicated_Python_Developers from './components/Hire Us/python-developers/Hire_Dedicated_Python_Developers';
import Hire_Dedicated_Android_Developers from './components/Hire Us/android-developers/Hire_Dedicated_Android_Developers';
import Hire_Dedicated_ios_Developers from './components/Hire Us/ios-developers/Hire_Dedicated_ios_Developers';
import Hire_Dedicated_php_Developers from './components/Hire Us/php-developers/Hire_Dedicated_php_Developers';
import Hire_Dedicated_Ecommerce_Developers from './components/Hire Us/e-commerce-developers/Hire_Dedicated_Ecommerce_Developers';

// subProjects
import NBTC from './components/Projects/subProjects/NBTC/NBTC'
import Figo from './components/Projects/subProjects/FIGO/figo'
import Lmrcl from './components/Projects/subProjects/LMRCL/Lmrcl'
import Spiritual from './components/Projects/subProjects/Ind-Spiritual/spiritual'
import Covid from './components/Projects/subProjects/Covid-19/covid'  
import University from './components/Projects/subProjects/Allahabad University/university'  
import Pixstory from './components/Projects/subProjects/Pixstory/pixstory'  
import Capitalfirst from './components/Projects/subProjects/Capital-first/capital'  
import Bcpm from './components/Projects/subProjects/Bcpm-Mis/bcpm'  
import Letzpay from './components/Projects/subProjects/Letzpay/letzpay'  
import Khadi from './components/Projects/subProjects/Khadi-India/khadi'
import Digital from './components/Projects/subProjects/Te-Digital-Market-Place/te_digital'
import Lsesp from './components/Projects/subProjects/LSESP/Lsesp'
import Lehren from './components/Projects/subProjects/Lehren/lehren'
import Rozana from './components/Projects/subProjects/Rozana/rozana'
import Poptv from './components/Projects/subProjects/Poptv/poptv'
import Ada from './components/Projects/subProjects/Ada/ada'
import Abacus from './components/Projects/subProjects/Abacus/abacus'
import Krisin from './components/Projects/subProjects/Krisin/krisin'
import Academia from './components/Projects/subProjects/Academia/academia'
import Fhh from './components/Projects/subProjects/First-hand-holding/fhh'
import Descon from './components/Projects/subProjects/Descon/descon'
import Chashmewala from './components/Projects/subProjects/Abc-Chashmewala/chashmewala'
import Gramik from './components/Projects/subProjects/Gramik/gramik'  
import Aviom from './components/Projects/subProjects/Aviom/aviom'  
import Rdx from './components/Projects/subProjects/RDX/rdx'  

import PageNotFound from './components/PageNotFound';

// tag inside element should be in capital
// and because of this word written after import should also be in capital 
// because both should match

const RouterComponent = () => {

    const Top = () => {
        const { pathname } = useLocation(); 
        
        useEffect(() => {
        //   window.scrollTo(0, 0);
          window.scrollTo({top: 0, behaviour: "smooth"});
        }, [pathname]);
      
        return null; 
      }



    return (
        <Router>
            <Top />
             <Navbar></Navbar>
                <Routes>

                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    
                                <Route path='web-design' element={<Web_Design_and_Development />} />
                                <Route path="mobile-app" element={<Mobile_App_Development />} />
                                <Route path="e-commerce" element={<E_Commerce_and_Retail />} />
                                <Route path="ai-ml" element={<Artificial_Intelligence_and_Machine_Learning />} />
                                <Route path="custom-software" element={<Custom_Software_Development />} />
                                <Route path="enterprise-software" element={<Enterprise_Software_Development />} />
                        
                    
                    <Route path="/projects" element={<Projects />}/>
                                <Route path="/nbtc" element={<NBTC />} />
                                <Route path="/figo-gyn" element={<Figo />} />
                                <Route path="/upmrc" element={<Lmrcl />} />
                                <Route path="/ind-spiritual" element={<Spiritual />} />
                                <Route path="/covid-19" element={<Covid />} />
                                <Route path="/allahabad-university" element={<University />} />
                                <Route path="/pixstory" element={<Pixstory />} />
                                <Route path="/capital-first" element={<Capitalfirst />} />
                                <Route path="/bcpm-mis" element={<Bcpm />} />
                                <Route path="/letzpay" element={<Letzpay />} />
                                <Route path="/khadi-india" element={<Khadi />} />
                                <Route path="/te-digital-market-place" element={<Digital />} />
                                <Route path="/lsesp" element={<Lsesp />} />
                                <Route path="/lehren" element={<Lehren />} />
                                <Route path="/rozana" element={<Rozana />} />
                                <Route path="/poptv" element={<Poptv />} />
                                <Route path="/ada-chikan" element={<Ada />} />
                                <Route path="/abacus" element={<Abacus />} />
                                <Route path="/krisin" element={<Krisin />} />
                                <Route path="/academia" element={<Academia />} />
                                <Route path="/fhh" element={<Fhh />} />
                                <Route path="/descon" element={<Descon />} />
                                <Route path="/abc-chashmewala" element={<Chashmewala />} />
                                <Route path="/gramik" element={<Gramik />} />
                                <Route path="/aviom" element={<Aviom />} />
                                <Route path="/rdx-play" element={<Rdx />} />
                    {/* </Route> */}

                    <Route path="/projects-new" element={<ProjectsNew />}/>
                    <Route path="/team" element={<Team />} />
                    <Route path="/career" element={<Career />} />

                                <Route path='python-developers' element={<Hire_Dedicated_Python_Developers />} />
                                <Route path="android-developers" element={<Hire_Dedicated_Android_Developers />} />
                                <Route path="ios-developers" element={<Hire_Dedicated_ios_Developers />} />
                                <Route path="php-developers" element={<Hire_Dedicated_php_Developers />} />
                                <Route path="e-commerce-developers" element={<Hire_Dedicated_Ecommerce_Developers />} />

                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<PageNotFound />} />

                </Routes>
             <Footer></Footer>
        </Router> 
    );
};

export default RouterComponent
// tag inside element should be in capital
// and because of this next word after import should also be in capital 
// because both should match