import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
export default function Home() {
    const [loading, setLoading] = useState(false);
    const [endpoint, setEndpoint] = useState();
    const [results, setResults] = useState();

    const benchmark = () => {};

    return (
        <div className={styles.container}>
            <Head>
                <title>NFT API Benchmark</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <form onSubmit={benchmark} className={styles.form}>
                    <h4>NFT API Benchmark</h4>
                    <p>
                        <em>Select an API provider</em>
                    </p>
                    <div className={styles.field}>
                        <input
                            className={styles.input}
                            type="text"
                            placeholder="Enter URL"
                            spellCheck="false"
                        ></input>
                        <div className={styles.group}>
                            <label>Number of NFTs</label>
                            <input
                                className={`${styles.number} ${styles.input}`}
                                type="number"
                                min="1"
                                max="32"
                            ></input>
                        </div>

                        <button className={styles.button}>Run test</button>
                    </div>
                </form>
            </main>
        </div>
    );
}
