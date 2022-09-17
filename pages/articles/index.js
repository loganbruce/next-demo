import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { GradCard } from '../../components/articleCard/ArticleCard'
import { PageTitleHeader } from '../../components/pageTitleHeader/PageTitleHeader'
import styles from '../../styles/Articles.module.css'


export default function Articles({ articles }) {

  useEffect(() => {
    console.log({articles})
  }, )

  return (
    <div>
      <Head>
        <title>Articles | NEXT JS DEMO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTitleHeader title="all articles" navigation={true}/>

      <div className={styles.articlesList}>
          {articles.map((article) => (
              <GradCard key={article.id} data={article}/>
          ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}
