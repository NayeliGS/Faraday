import { FaraContact } from "../components/Faraday/FaraContact";
import { FaradayNav } from "../components/Faraday/FaradayNav";
import { FaraFooter } from "../components/Faraday/FaraFooter";
import { FaraHeroSolutions } from "../components/Faraday/FaraHeroSolutions";
import { FaraHowWeWork } from "../components/Faraday/FaraHowWeWork";
import { FaraStrategy1 } from "../components/Faraday/FaraStrategy1";
import { FaraTechStack } from "../components/Faraday/FaraTechStack";
import { FaraWhatWeDo } from "../components/Faraday/FaraWhatWeDo";



export const Faraday = () => {
  return (
    <div className="min-h-screen  text-[#F9F9F9] flex flex-col font-sans relative">
    <FaradayNav />
    


      <main className="flex-grow flex flex-col w-full">
        
        <FaraHeroSolutions />
        <FaraStrategy1 />
        <FaraWhatWeDo />
        <FaraTechStack />
        <FaraHowWeWork />
        <FaraContact />
        <FaraFooter />
        
        
        
      
  
        
      </main>
    

     
    </div>
  );
};