
import Navbar from "./NavbarSection/Navbar";
import Jumbotron from "./JumbotronSection/Jumbotron";
import Card from "./CardSection/Card";
import Footer from "./FooterSection/Footer";


//create your first component
const Home = () => {
	return (
		<>
			<Navbar/>
			<Jumbotron/>
			<Card/>
			<Footer/>
		</>
	);
};

export default Home;