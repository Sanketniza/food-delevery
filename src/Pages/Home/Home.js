import React from 'react'
import Layout from '../../Components/Layouts/Layout';
import  "../../Styles/HomeStyle.css";
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';

function Home() {
  return (
    <>
       
        <Layout>

           { /* Home section Hero Banner */}

           <Section1/>

           {/* Home section About */}

           <Section2/>

           {/* Home section menu */}

           <Section3/>

           {/* HOme section Promotion */}

           <Section4/>

           {/* home section shop */}

           <Section5/>

           {/* home section blog */}

           <Section6/>

           {/* home section contact */}

           <Section7/>

           
        </Layout>

    </>
  )
}

export default Home;