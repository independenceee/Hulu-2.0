import React from "react";
import Thumbnail from "./Thumbnail";
type Props = {
  results: any;
};

const Results = function ({ results }: Props) {
  console.log(results);
  return (
    <div>
      {results.map((result: any) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
