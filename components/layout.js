import Navbar from "./navbar";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from 'next/router';
import nProgress from "nprogress";

const Layout = ({ children }) => {

  const router = useRouter();

  useEffect(() => {
    const HandleRouter = url => {
      console.log(url)
      nProgress.start();
    }

    router.events.on('routeChangeStart', HandleRouter)

    router.events.on('routeChangeComplete', () => nProgress.done())

    return() => {
      router.events.off('routeChangeStart', HandleRouter)
    }
  }, [])

  return (
    <>
      <Navbar />

      <main className="container py-4">
        {children}
      </main>
      <footer className="bg-dark text-light text-center">
        <div className="container p-4">
          <h1>&copy; Vivian Vislow</h1>
          <p>2000 - {new Date().getFullYear()}</p>
          <p>All rights reserved</p>
        </div>

      </footer>
    </>
  )
  };

export default Layout;
