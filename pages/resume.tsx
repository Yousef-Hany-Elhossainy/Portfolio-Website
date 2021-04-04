import Bar from "../components/Bar"
import { languages, tools } from "../data"

const resume = () => {
    return (
        <div className="px-6 py-2">
           <div className="grid gap-6 md:grid-cols-2">
               <div>
                   <h5 className="my-3 text-2xl font-bold">Education</h5>
                   <div>
                       <h5 className="my-2 text-xl font-bold">Mechanical Engineering</h5>
                       <p className="font-semibold">Alfaisal University (2015)</p>
                   </div>
               </div>
               <div>
                   <h5 className="my-3 text-2xl font-bold">Experience</h5>
                   <div>
                       <h5 className="my-2 text-xl font-bold">Software Developer</h5>
                       <p className="font-semibold">1 Year</p>
                       <p className="my-3">Self taught developer</p>
                   </div>
               </div>

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

        </div>
    )
}

export default resume
