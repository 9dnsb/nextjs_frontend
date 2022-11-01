/* eslint-disable max-lines-per-function */
import { NextSeo } from 'next-seo'

function About() {
  return (
    <main>
      <NextSeo
        title="About"
        description="A copy of a blog using Strapi. About Page"
      />
      <div id="aboutContainer">
        {/* <style jsx global>{`
          * {
            background-color: #ffbc00;
          }
        `}</style> */}
        <h1>The process I used:</h1>
        <h2>
          This is a blog website made using Strapi and Next.js. All the style is
          custom made with Sass. Strapi has been deployed to Heroku. The site
          uses Axios to make network requests. SWR React Hook is used for data
          fetching updated Strapi information. Markdown-it is used to display
          the markdown from Strapi. Images are uploaded using Cloudinary. The
          site uses Typescript and I have tried to follow many of the coding
          principles from{' '}
          <a
            href="https://github.com/alan2207/bulletproof-react"
            target="_blank"
            rel="noreferrer"
          >
            Bulletproof React (opens in new window).{' '}
          </a>
          You can view the frontend Next.js code{' '}
          <a
            href="https://github.com/9dnsb/nextjs_frontend"
            target="_blank"
            rel="noreferrer"
          >
            on my Github here (opens in new window).{' '}
          </a>
          You can view the backend Strapi code (opens in new window){' '}
          <a
            href="https://github.com/9dnsb/strapi_backend"
            target="_blank"
            rel="noreferrer"
          >
            on my Github here (opens in new window).
          </a>{' '}
          I have tried to make my website as accessibile as possible. I have run
          accessibility tests using WebAIM and IBM Equal Access Accessibility
          Checker and have removed all critical issues.
        </h2>
      </div>
    </main>
  )
}

export default About
