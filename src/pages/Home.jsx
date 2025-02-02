import React from 'react';
import Specials from '../components/Specials';
import CustomersSay from '../components/CustomersSay';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Chicago from '../components/Chicago';

export default function Home() {
  return (
    <>
      <Main />
      <Specials />
      <CustomersSay />
      <Chicago />
      <Footer />
    </>
  );
}
