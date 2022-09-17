import Head from 'next/head'
import Link from 'next/link'
import { PageTitleHeader } from '../../components/pageTitleHeader/PageTitleHeader'
import styles from '../../styles/Articles.module.css'


export default function ArticlemDetail({ article }) {

    return (
        <div className={styles.articlePageContainer}>
            <Head>
                <title>Article Details | NEXT JS DEMO</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <PageTitleHeader title={article.title} navigation={true}/>

            <div className={styles.articleBody}>
                <p>{article.body}</p>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const articles = await res.json()

    const paths = articles.map((article) => ({
        params: { id: article.id.toString() },
    }))

    return { paths, fallback: false }
}


export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const article = await res.json()

    return { props: { article } }
}
