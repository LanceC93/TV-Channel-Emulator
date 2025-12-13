import styles from '../styles/ChannelDescription.module.css';

export default function ChannelDescription({time}) {
    return (
        <div className={styles.container}>
            {time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
        </div>
    );
}