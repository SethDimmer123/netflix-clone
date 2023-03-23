import Head from "next/head"
import Image from "next/image"

function Login() {
  return <div>
      {/* really good for seo */}
    <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10  !hidden opacity-60 sm:!inline"
        objectFit="cover" alt=""
      />
    </div>
}

export default Login