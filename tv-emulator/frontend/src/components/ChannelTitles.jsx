import styles from '../styles/ChannelTitles.module.css';
import channels from '../data/channels.json';

export default function ChannelTitles() {
    return (
        <div className={styles.container}>
            <div className={styles.spacer}/>
            {channels.map((channel) => {
                return (
                    <div key={channel.number} className={styles.channel}>
                        <span className={styles.number}>{channel.number}</span>
                        <span className={styles.name}>{channel.name}</span>
                    </div>
                );
            })}
        </div>
    );
}