import React from "react";
import Head from "next/head";
type Props = {
  title: string;
};

const Meta = function ({ title }: Props) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default Meta;
