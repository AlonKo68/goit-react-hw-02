import css from './Notification.module.css';

export default function Notification({message}) {
    return (
        <>
            <p className={css.notification_text}>{message}</p>
        </>
    )
}