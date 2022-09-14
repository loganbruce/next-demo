import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { GradCard } from '../../components/GradCard/GradCard'
import styles from '../../styles/Graduates.module.css'


export default function Graduates({ graduates }) {

  useEffect(() => {
    console.log({graduates})
  }, )

  return (
    <div>
      <Head>
        <title>GRADUATES</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>GRADUATES</h1>
      <Link href='/'>Home</Link>
      <div className={styles.graduatesList}>
          {graduates.map((graduate) => (
              <GradCard key={graduate.id} data={graduate}/>
          ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const graduates = await res.json()

  return {
    props: {
      graduates,
    },
    // for ISR
    revalidate: 10,
  }
}
