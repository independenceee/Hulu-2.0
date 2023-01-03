import type { NextPage } from "next";
import Header from "../layouts/header";
import Navbar from "../layouts/navbar";
import requests from "../utils/request";
import Results from "../layouts/results";

type Result = {
  
}
const Home: NextPage = (props) => {
  return (
    <div>
      <Header />
      <Navbar />
      <Results results={props.results} />
    </div>
  );
};

export async function getServerSideProps(context: any) {
  try {
    const genre: any = context.query.genre;
    const request = await fetch(
      `https://api.themoviedb.org/3${
        requests[genre]?.url || requests.fetchTrending
      }`
    ).then((response) => response.json());

    return {
      props: {
        results: request.results,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default Home;
