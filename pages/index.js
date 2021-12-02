import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>

          {/* Add this <section> tag below the existing <section> tag */}
        <section className={utilStyles.headingMd}>
          <p>Hello, I'm Elisha. I'm a Enthusiastic software engineer with strong analytical and reasoning skills. Well-versed in technology and writing code to build products and solutions that are reliable and user-friendly. Passionate about software architecture and designs.</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
              <h2 className={utilStyles.headingLg}>Blog</h2>
              <ul className={utilStyles.list}>
                  {allPostsData.map(({ id, date, title }) => (
                      <li className={utilStyles.listItem} key={id}>
                          {title}
                          <br />
                          {id}
                          <br />
                          {date}
                      </li>
                  ))}
              </ul>
          </section>
      </Layout>
  )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}
