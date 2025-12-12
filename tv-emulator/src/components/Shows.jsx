import styles from '../styles/Shows.module.css';

function ShowTimes() {
    return(
        <div className={styles.times}></div>
    );
}

function ShowNames() {
    return(
        <div className={styles.names}></div>
    );
}

export default function Shows() {
    return(
        <div className={styles.shows}>
            <ShowTimes/>
            <ShowNames/>
        </div>
    );
}