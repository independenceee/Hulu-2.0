import type { NextPage } from "next";
import Header from "../layouts/header";
import Navbar from "../layouts/navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Navbar />
    </div>
  );
};

export default Home;
