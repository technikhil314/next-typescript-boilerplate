import Head from 'next/head';
import React, { useEffect, useState, ReactElement } from 'react';

export async function getStaticProps(): Promise<any> {
  const res = await fetch('http://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      data,
    },
  };
}

export default function Home(props: any): ReactElement {
  const [data, setData] = useState(props.data);
  useEffect((): void => {
    const getData = async (): Promise<void> => {
      const res = await fetch('http://jsonplaceholder.typicode.com/posts/10');
      const data = await res.json();
      setData(data);
    };
    getData();
  }, []);
  return (
    <div className="text-gray-500 hover:bg-red-700">
      <Head>
        <title>Retro Boards</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Next.js!</h1>
        <p>{JSON.stringify(data, null, 2)}</p>
      </main>
    </div>
  );
}
