// ********* EcommerSio Website is created by Zpunet ******************
// ********* If you get an error please contact us ******
// ******** Email:info@zpunet.com *********
// ********* Website:www.zpunet.com *********
// ********* Phone:+255 65 535 2744 *********
// ********* Youtub Channel: https://www.youtube.com/channel/UCOYwYO-LEsrjqBs6xXSfq1w *********

// ******** Support my work with *********
// ********* https://www.patreon.com/zpunet *********
// ********* https://www.buymeacoffee.com/zpunet *********



// ********* This is the main component of the website *********
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutUs from './screens/AboutUs';
import ContactUs from './screens/ContactUs';
import Shop from './screens/Shop';
import FAQPage from './screens/FAQ';
import PrivacyPolicy from './screens/Privacy';
import TermAndConditions from './screens/TermsCondition';
import CategoryPage from './screens/CategoryPage';
import Checkout from './screens/Checkout';
import OrderScreen from './screens/OrderScreen';
import Dashboard from './screens/Dashboard/Dashboard';
import Orders from './screens/Dashboard/Orders';
import UpdateProfile from './screens/Dashboard/UpdateProfile';
import Password from './screens/Dashboard/Password';
import ScrollToTop from './ScrollOnTop';
import NotFound from './screens/NotFound';
import { PopUpProvider } from './Context/PopUpContex';

function App() {
  AOS.init();
  return (
    <PopUpProvider>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/terms-condition" element={<TermAndConditions />} />
          <Route path="/policy" element={<PrivacyPolicy />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order" element={<OrderScreen />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<UpdateProfile />} />
          <Route path="/password" element={<Password />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
    </PopUpProvider>
  );
}

export default App;


