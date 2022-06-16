import React from "react";
import { BsFillCircleFill, BsFillStarFill } from "react-icons/bs";
import HomeSlider from "../Components/HomeSlider";
import TradingView from "../Components/TradingView";
import servicesImg from "../Assets/servicesImg.png";
import aboutUsImg from "../Assets/aboutUsImg.png";
import card1 from "../Assets/card1.png";
import card2 from "../Assets/card2.png";
import card3 from "../Assets/card3.png";
import client1 from "../Assets/client1.png";
import client2 from "../Assets/client2.png";
import ContactUs from "../Components/ContactUs";
const Home = () => {
  return (
    <>
      <HomeSlider />
      <TradingView />
      <section className="services">
        <div className="services__wrapper">
          <h2 className="services__heading">
            Our <span style={{ color: "#2F80ED" }}>Services</span>
          </h2>
          <div className="services__content">
            <img
              src={servicesImg}
              alt="servicesImg"
              className="services__content-img"
            />
            <div className="services__content-info">
              <h2>
                Fast order executions and Amazing
                <br /> Trading Conditions
              </h2>
              <ul>
                <li>- Forex</li>
                <li>- Commodities </li>
                <li>- Metals</li>
                <li>- Energies</li>
                <li>- Cryptocurrencies</li>
                <li>- Indices</li>
                <li>- Equities</li>
              </ul>
              <a href="/" className="open__acc">
                Open Account
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="aboutus">
        <div className="aboutus__content">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh velit
            habitant in feugiat elementum lectus. Pharetra risus nulla purus
            semper sed nibh donec vel. Viverra non amet, commodo sapien. Risus
            morbi magna donec nisl laoreet ultricies neque, nunc, etc.
          </p>
          <p>
            Tristique eu quam quis cras cras congue. Sed netus hac sit est nec
            laoreet sollicitudin egestas et. Sagittis proin etiam pellentesque
            elit, massa neque. Odio etiam sagittis libero, at vitae.
          </p>
          <p>
            Commodo lectus congue sed imperdiet mauris, pretium condimentum.
            Neque suspendisse vivamus orci, euismod magna aliquam. Lacinia
            viverra sed condimentum odio risus ornare condimentum. Quam tellus
            egestas consectetur ligula sed egestas.
          </p>
        </div>
        <div className="aboutus__img">
          <img src={aboutUsImg} alt="aboutUs" />
        </div>
      </section>
      <section className="cards">
        <div className="cards__wrapper">
          <div className="cards__single">
            <div className="cards__single-img">
              <img src={card1} alt="cards" />
            </div>
            <div className="cards__single-content">
              <h2>Our Advantages</h2>
              <ul>
                <li>
                  <BsFillCircleFill />
                  <p>Free Funding</p>
                </li>
                <li>
                  <BsFillCircleFill />
                  <p>Multiple trading accounts</p>
                </li>
                <li>
                  <BsFillCircleFill />
                  <p>Insurance for clients’ funds</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="cards__single">
            <div className="cards__single-img">
              <img src={card2} alt="cards" />
            </div>
            <div className="cards__single-content">
              <h2>Secured Broker</h2>
              <ul>
                <li>
                  <BsFillCircleFill />
                  <p>
                    Client funds are held in <br />
                    segregated accounts
                  </p>
                </li>
                <li>
                  <BsFillCircleFill />
                  <p>
                    Full Transparency Market
                    <br /> Leading Insurance
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="cards__single">
            <div className="cards__single-img">
              <img src={card3} alt="cards" />
            </div>
            <div className="cards__single-content">
              <h2>Multi-Asset Broker CFDs</h2>
              <ul>
                <li>
                  <BsFillCircleFill />
                  <p>Spot and Futures Contracts</p>
                </li>
                <li>
                  <BsFillCircleFill />
                  <p>Gold and Oil</p>
                </li>
                <li>
                  <BsFillCircleFill />
                  <p>Shares of major companies</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="clients">
        <h2 className="clients__heading">
          This is what clients
          <br /> say about us
        </h2>
        <div className="clients__cards">
          <div className="clients__card">
            <div className="clients__card-heading">
              <img src={client1} alt="client" />
              <div>
                <h4>Riva de Ruhal</h4>
                <p>Real estate agent</p>
              </div>
            </div>
            <p>
              Thank you CapitalCo.Pro I'm very happy with the support you had
              provided me!
            </p>
            <div className="clients__card-star">
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
            </div>
          </div>
          <div className="clients__card">
            <div className="clients__card-heading">
              <img src={client2} alt="client" />
              <div>
                <h4>Efran Birsa</h4>
                <p>Sales advisor</p>
              </div>
            </div>
            <p>
              Thank you, for always being there
              <br /> to help me!
            </p>
            <div className="clients__card-star">
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
    </>
  );
};

export default Home;
