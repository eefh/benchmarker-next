import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Form() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);
    const [responseTime, setResponse] = useState(null);
    const [formData, setFormData] = useState({
        endpoint: "",
        number: 1,
    });
    const [results, setResults] = useState([]);

    const runBenchmark = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);
        const startTime = performance.now();
        for (let i = 0; i < formData.number; i++) {
            const response = await fetch(formData.endpoint);
            setStatus(response.status);
        }
        const endTime = performance.now();
        const resultTime = Math.floor(endTime - startTime);

        setResponse(resultTime);
        setLoading(false);
    };
    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    return (
        <form onSubmit={runBenchmark} className={styles.form}>
            <p>
                <em>Select an endpoint</em>
            </p>
            <div className={styles.field}>
                <input
                    className={styles.input}
                    type="url"
                    placeholder="Enter a URL"
                    spellCheck="false"
                    required
                    name="endpoint"
                    onChange={(e) => handleInputChange(e)}
                ></input>
                <div className={styles.group}>
                    <label>Number of NFTs</label>
                    <input
                        className={`${styles.number} ${styles.input}`}
                        type="number"
                        min="1"
                        max="32"
                        value={formData.number}
                        name="number"
                        required
                        onChange={handleInputChange}
                    ></input>
                </div>

                <button type="submit" className={styles.button}>
                    Run test
                </button>
            </div>
            {loading && (
                <div className={styles.response}>
                    <p>Loading...</p>
                </div>
            )}
            {status && (
                <div className={styles.response}>
                    <p>Response time: {responseTime}</p>
                    <div className={`${styles.status}`}>
                        <p>{status}</p>
                    </div>
                </div>
            )}
        </form>
    );
}
