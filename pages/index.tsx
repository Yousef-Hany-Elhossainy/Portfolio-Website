import { motion } from 'framer-motion';
import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import React from 'react'
import { FadeInUp, RouteFade, Stagger } from '../animations';
import ServiceCard from '../components/ServiceCard';
import{services} from '../data';

import Head from"next/head";


const index = ({endpoint}) => {
  console.log(endpoint);
  return (
    <motion.div className="flex flex-col flex-grow px-6 pt-1"
      variants={RouteFade} initial = "initial" animate="animate" exit="exit">
        <Head>
          <title>Software/Web Developer | Portfolio |Yousef</title>
        </Head>
      <h5 className="my-3 font-medium">
        Software developer and Mechanical Engineer,
         enjoys learning new skills and working on challenging problems.
      </h5>
      <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100" style={{marginLeft: '-1.5rem',marginRight: '-1.5rem'}}>
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
        <motion.div className="grid gap-6 lg:grid-cols-2" variants ={Stagger} initial = "initial" animate="animate">
          {services.map(service =>(
            <motion.div 
            variants={FadeInUp}             
            className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1" key={service.title}>
              <ServiceCard service={service} key={service.title} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default index

export const getServerSideProps = async (context:GetServerSidePropsContext)=>{

  // const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
  // const data = await res.json();

  // console.log(process.env.VERCEL_URL);

  return { 
    props:{
      services:{ endpoint:process.env.VERCEL_URL },
    }
   };
};

// export const getStaticProps = async (context:GetStaticPropsContext)=>{

//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();

//   console.log("Server",services);

//   return { 
//     props:{
//       services:data.services,
//     }
//    }
// }