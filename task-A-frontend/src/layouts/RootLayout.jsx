import Header from "../components/Header";
import Footer from "../components/Footer";
import { Route, Routes } from "react-router-dom";

import HomePages from "../pages/HomePages";
import JobPages from "../pages/JobPages";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/home" element={<HomePages />} />
        <Route path="/job" element={<JobPages />} />
      </Routes>
      <Footer />
    </>
  );
};

export default RootLayout;
