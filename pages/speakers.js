import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Speakers from "../src/components/Speakers";
import SpeakerSearchBar from "../src/components/SpeakerSearchBar";
import Menu from "../src/components/Menu";

function Page() {
    return (
        <div>
            <Header/>
            <Menu/>
            <SpeakerSearchBar/>
            <Speakers/>
            <Footer/>

        </div>
    );
}

export default Page;