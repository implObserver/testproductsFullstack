import styles from './styles/Line.module.css'
interface LineProps {
    text: string,
}

export const Line: React.FC<LineProps> = ({ text }) => {
    return (
        <div className={`
        ${styles.recent}
        ${text.length > 0
                ? styles.gap
                : ''}`
        }>
            <div className={styles.recent_name}>
                {text}
            </div>
            <div className={styles.recent_line}></div>
        </div>
    )
}