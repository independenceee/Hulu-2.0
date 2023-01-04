import React from "react";
import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
type Props = {
  results: any;
};

const Results = function ({ results }: Props) {
  console.log(results);
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:flex flex-wrap justify-center">
      {results.map((result: any) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
};

export default Results;
