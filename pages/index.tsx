import React from "react";
import type { NextPage } from "next";
import Header from "../layouts/header";
import Navbar from "../layouts/navbar";
import Results from "../layouts/results";
import requests from "../utils/request";
import Meta from "../components/Meta";

const Home: NextPage = (props) => {
  const { results }: any = props;
  console.log(results);
  return (
    <div>
      <Meta title="Hulu 2.0"/>
      <Header />
      <Navbar />
      <Results results={results} />
    </div>
  );
};

export async function getServerSideProps(context: any) {
  try {
    const genre: any = context.query.genre;
    const request: any = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1`
    ).then((response) => response.json());

    return {
      props: {
        results: request.results,
      },
    };
  } catch (error) {
    return {
      props: {
        results: [],
      },
    };
  }
}

export default Home;
