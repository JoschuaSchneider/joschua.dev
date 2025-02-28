import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Container } from "@/components/container";
import { DarkModeButton } from "@/components/dark-mode-button";
import CurrentSpotifyTrack from "@/components/current-spotify-track";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joschua; Full-Stack Developer from Germany",
  description: "I'm a senior Full-Stack developer from Germany. I build modern web applications, Mobile apps and tooling. Coding has been my passion for over 15 years and my particular interest in Web Development now makes up the majority of my experience.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="sticky top-0 z-50 py-8 mt-8 nav bg-gradient-to-b dark:from-black from-white to-transparent backdrop-blur-sm">
          <div className="flex items-center justify-between max-w-4xl px-8 mx-auto">
            <div className="">
              <Link href="/" className="flex items-center justify-center w-8 h-8 font-mono text-xl text-white bg-indigo-800 rounded-sm">
                js
              </Link>
            </div>
            <div className="flex text-gray-900 dark:text-gray-200">
              <Link href="/about-me" className="px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-900">
                About Me
              </Link>
              <Link href="/" className="px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-900">
                Home
              </Link>
              <DarkModeButton />
            </div>
          </div>
        </nav>
        <main>
          {children}
        </main>
        <footer className="pt-20 mb-20">
          <Container className="">
            <Suspense fallback={<div className="h-24" />}>
              <CurrentSpotifyTrack />
            </Suspense>
          </Container>
          <Container className="px-8 mx-auto mt-20">
            <div className="flex items-center justify-center mb-6 space-x-6 font-mono">
              <Link href="/contact" className="text-gray-700 rounded dark:text-gray-600">
                /contact
              </Link>
              <Link href="/uses" className="text-gray-700 rounded dark:text-gray-600">
                /uses
              </Link>
            </div>
            <div className="flex items-center justify-center mb-6 space-x-6 text-gray-700 dark:text-gray-500">
              <a
                href="https://twitter.com/joschuadev"
                className="flex items-center"
                title="@joschuadev"
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="h-5"
                >
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                </svg>
              </a>
              <a
                href="https://github.com/JoschuaSchneider"
                className="flex items-center"
                title="@JoschuaSchneider"
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="h-5"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href="mailto:hey@joschua.dev"
                className="flex items-center"
                title="Send me an Email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </a>
            </div>
            <p className="mb-2 text-xs text-center text-gray-600">
              © 2025 Joschua Schneider
            </p>
          </Container>
        </footer>
      </body>
    </html>
  )
}
