import styles from "./styles.module.scss"

const index = () => {
    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <img src="/logo.png" alt="Dev News!" />
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Posts</a>
                </nav>
            </div>
        </header>
    );
}

export default index;