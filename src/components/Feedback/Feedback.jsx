import css from "./Feedback.module.css"

export default function Feedback({ feedback: { good, neutral, bad }, totalFeedback }) {
     const percOfPosFeddback = Math.round(((good + neutral) / totalFeedback) * 100)
    return (
        <ul className={css.feedbackList}>
            <li className={css.feedbackItem}>
                <p>Good: {good}</p>
            </li>
            <li className={css.feedbackItem}>
                <p>Neutral: {neutral}</p>
            </li>
            <li className={css.feedbackItem}>
                <p>Bad: {bad}</p>
            </li>
            <li className={css.feedbackItem}>
                <p>Total: {totalFeedback}</p>
            </li>
            <li className={css.feedbackItem}>
                <p>Positive: {percOfPosFeddback}%</p>
            </li>
        </ul>
    )
}