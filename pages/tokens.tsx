import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import getNetworkTitle from 'lib/networks/getNetworkTitle';
import Tokens from 'ui/pages/Tokens';

const BlockPage: NextPage = () => {
  const title = getNetworkTitle();
  return (
    <>
      <Head>
        <title>{ title }</title>
      </Head>
      <Tokens/>
    </>
  );
};

export default BlockPage;

export { getServerSideProps } from 'lib/next/getServerSideProps';
