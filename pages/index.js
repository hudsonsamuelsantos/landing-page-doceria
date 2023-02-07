import Head from 'next/head'
import Image from "next/image";
import navImg from '../public/Ellipse 4.png'
import { HiShoppingBag } from 'react-icons/hi2'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Line Doceria Artesanal</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Sue+Ellen+Francisco&display=swap" rel="stylesheet" />
      </Head>

      <main className='bg-cyan-700 w-screen h-screen'>
        <nav className='bg-white h-20 px-28 flex items-center justify-between'>
          <div className='flex gap-3'>
            <Image src={navImg} />

            <span className='font-sue text-4xl text-cyan-700'>
              Line Doceria Artesanal
            </span>
          </div>

          <a>
            <HiShoppingBag size="1.8rem" className='text-cyan-700 cursor-pointer' />
          </a>
        </nav>
      </main>
    </div>
  )
}
