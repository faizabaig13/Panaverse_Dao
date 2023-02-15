import { Footer, Navbar } from '../components';
import { About,Feedback, AboutPanaverse, Hero, CoreCourse, AboutCourse, Map,} from '../sections';
import Quarterone from '../components/Quarterone';
const Page = () => (
  <div className="bg-green-100 overflow-x-hidden  overflow-y-hidden">
    <Navbar />
    <Hero />
    <About />
    <Quarterone />
    <AboutPanaverse />
    <AboutCourse />
    <Map />
    <CoreCourse />
    <Feedback />
    <Footer />
  </div>
);

export default Page;
