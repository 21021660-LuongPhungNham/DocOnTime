import Banner from "../components/Banner"
import Header from "../components/Header"
import SpecialityMenu from "../components/SpecialityMenu"
import FeaturedDoctors from "../components/FeaturedDoctors"

const Home = () => {
    return (
        <div>
            <Header />
            <SpecialityMenu />
            <FeaturedDoctors/>
            <Banner/>
        </div>
    )
}

export default Home