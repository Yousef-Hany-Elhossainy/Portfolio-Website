import Bar from "../components/Bar"
import { languages, tools } from "../data"
import{motion} from"framer-motion";
import{FadeInUp, RouteFade} from"../animations";
import Head from "next/head";

const resume = () => {

   

    return (
        <motion.div className="px-6 py-2" variants={RouteFade} initial = "initial" animate="animate"  exit="exit">
            <Head>
                <title>Software/Web Developer | Resume |Yousef</title>
            </Head>
           <div className="grid gap-6 md:grid-cols-2">
               <motion.div variants = {FadeInUp} initial = "initial" animate="animate">
                   <h5 className="my-3 text-2xl font-bold">Education</h5>
                   <div>
                       <h5 className="my-2 text-xl font-bold">Mechanical Engineering</h5>
                       <p className="font-semibold">Bachelor of Science in Mechanical Engineering (2015)</p>
                   </div>
               </motion.div>
               <motion.div variants = {FadeInUp} initial = "initial" animate="animate">
                   <h5 className="my-3 text-2xl font-bold">Experience</h5>
                   <div>
                       <h5 className="my-2 text-xl font-bold">Software/Web Developer</h5>
                       <p className="font-semibold">1 Year Self taught developer</p>
                       <p className="my-3"></p>
                   </div>
               </motion.div>

           </div>
        
        <div className="grid gap-6 md:grid-cols-2">
            <div>
                <h5 className="my-3 font-bold text2xl">Lanuages & Frameworks</h5>
                <div className="my-2">
                    {
                        languages.map(language =><Bar data={language} key={language.name}/>)
                    }

                </div>
            </div>
            <div>
                <h5 className="my-3 font-bold text2xl">Tools & Software</h5>
                <div className="my-2">
                    {
                        tools.map(tool =><Bar data={tool} key={tool.name}/>)
                    }

                </div>
            </div>
        </div>

        </motion.div>
    )
}

export default resume
