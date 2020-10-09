import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <nav
      className="sticky top-0 py-8 mt-8"
      style={{
        background: 'rgba(255,255,255,0.85)',
      }}
    >
      <div className="flex items-center justify-between max-w-4xl px-8 mx-auto">
        <div className="">
          <div className="flex items-center justify-center w-8 h-8 font-mono text-xl text-white bg-indigo-800 rounded-sm">
            js
          </div>
        </div>
        <div className="flex text-gray-900">
          <a href="#" className="px-4 py-2 rounded hover:bg-gray-100">
            Tools
          </a>
          <Link href="/blog">
            <a className="px-4 py-2 rounded hover:bg-gray-100">Blog</a>
          </Link>
          <Link href="/">
            <a href="#" className="px-4 py-2 rounded hover:bg-gray-100">
              Home
            </a>
          </Link>
        </div>
      </div>
    </nav>
    <main>{children}</main>
  </>
)

export default Layout
