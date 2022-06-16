import React from "react";
import Hero from "../Components/Hero";
import { AiFillCheckCircle } from "react-icons/ai";
import ContactUs from "../Components/ContactUs";
import heroBg from "../Assets/accountsHero.png";
const AccountsTypes = () => {
  return (
    <>
      <Hero heading="Account Types" img={heroBg} />
      <section className="accountTypes">
        <div className="accountTypes__single">
          <h2 className="accountTypes__single-heading">The Start Up Plan</h2>
          <p className="accountTypes__single-text">
            This is the is most affordable, and is convenient for companies on a
            constraint budget to get their products off the ground and in the
            hands of their users.
          </p>
          <div className="accountTypes__single-info">
            <h4>What You'll get</h4>
            <div className="accountTypes__single-info_single">
              <AiFillCheckCircle />
              <p>Benefit 1</p>
            </div>
            <div className="accountTypes__single-info_single">
              <AiFillCheckCircle />
              <p>Benefit 2</p>
            </div>
            <div className="accountTypes__single-info_single">
              <AiFillCheckCircle />
              <p>Benefit 3</p>
            </div>
            <div className="accountTypes__single-info_single">
              <AiFillCheckCircle />
              <p>Benefit 4</p>
            </div>
          </div>
          <hr className="accountTypes__single-line" />
          <div className="accountTypes__single-pricing">
            <h2>$129.99</h2>
            <h4>/Yearly Package</h4>
          </div>
          <button className="accountTypes__single-btn">Choose</button>
        </div>
        <div className="accountTypes__single">
          <h2 className="accountTypes__single-heading">The Start Up Plan</h2>
          <p className="accountTypes__single-text">
            This is the is most affordable, and is convenient for companies on a
            constraint budget to get their products off the ground and in the
            hands of their users.
          </p>
          <div className="accountTypes__single-info">
            <h4>What You'll get</h4>
            <div className="accountTypes__single-info_single">
              <AiFillCheckCircle />
              <p>Benefit 1</p>
            </div>
            <div className="accountTypes__single-info_single">
              <AiFillCheckCircle />
              <p>Benefit 2</p>
            </div>
            <div className="accountTypes__single-info_single">
              <AiFillCheckCircle />
              <p>Benefit 3</p>
            </div>
            <div className="accountTypes__single-info_single">
              <AiFillCheckCircle />
              <p>Benefit 4</p>
            </div>
          </div>
          <hr className="accountTypes__single-line" />
          <div className="accountTypes__single-pricing">
            <h2>$129.99</h2>
            <h4>/Yearly Package</h4>
          </div>
          <button className="accountTypes__single-btn">Choose</button>
        </div>
        <div className="accountTypes__single">
          <h2 className="accountTypes__single-heading">The Start Up Plan</h2>
          <p className="accountTypes__single-text">
            This is the is most affordable, and is convenient for companies on a
            constraint budget to get their products off the ground and in the
            hands of their users.
          </p>
          <div className="accountTypes__single-info">
            <h4>What You'll get</h4>
            <div className="accountTypes__single-info_single">
              <AiFillCheckCircle />
              <p>Benefit 1</p>
            </div>
            <div className="accountTypes__single-info_single">
              <AiFillCheckCircle />
              <p>Benefit 2</p>
            </div>
            <div className="accountTypes__single-info_single">
              <AiFillCheckCircle />
              <p>Benefit 3</p>
            </div>
            <div className="accountTypes__single-info_single">
              <AiFillCheckCircle />
              <p>Benefit 4</p>
            </div>
          </div>
          <hr className="accountTypes__single-line" />
          <div className="accountTypes__single-pricing">
            <h2>$129.99</h2>
            <h4>/Yearly Package</h4>
          </div>
          <button className="accountTypes__single-btn">Choose</button>
        </div>
        <div className="accountTypes__single">
          <h2 className="accountTypes__single-heading">The Start Up Plan</h2>
          <p className="accountTypes__single-text">
            This is the is most affordable, and is convenient for companies on a
            constraint budget to get their products off the ground and in the
            hands of their users.
          </p>
          <div className="accountTypes__single-info">
            <h4>What You'll get</h4>
            <div className="accountTypes__single-info_single">
              <AiFillCheckCircle />
              <p>Benefit 1</p>
            </div>
            <div className="accountTypes__single-info_single">
              <AiFillCheckCircle />
              <p>Benefit 2</p>
            </div>
            <div className="accountTypes__single-info_single">
              <AiFillCheckCircle />
              <p>Benefit 3</p>
            </div>
            <div className="accountTypes__single-info_single">
              <AiFillCheckCircle />
              <p>Benefit 4</p>
            </div>
          </div>
          <hr className="accountTypes__single-line" />
          <div className="accountTypes__single-pricing">
            <h2>$129.99</h2>
            <h4>/Yearly Package</h4>
          </div>
          <button className="accountTypes__single-btn">Choose</button>
        </div>
      </section>
      <ContactUs />
    </>
  );
};

export default AccountsTypes;
