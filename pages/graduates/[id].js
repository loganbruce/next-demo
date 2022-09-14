import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import { GradCard } from '../../components/GradCard/GradCard'
import styles from '../../styles/Graduates.module.css'


export default function GraduateDetail({ graduate }) {

    return (
        <div>
            <Head>
                <title>{graduate.title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <h3>{graduate.title}</h3>
            <Link href='/graduates'>Return to list of graduates</Link>
            <p>{graduate.body}</p>
        </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const graduates = await res.json()

    const paths = graduates.map((graduate) => ({
        params: { id: graduate.id.toString() },
    }))

    return { paths, fallback: false }
}


export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const graduate = await res.json()

    return { props: { graduate } }
}
