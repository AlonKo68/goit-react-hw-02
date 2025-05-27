import css from './Feedback.module.css';

export default function Feedback({ feedback, value, totalFeedback }) {
  return (
    <div>
      <ul>
        {feedback.map((item, i) => (
          <li key={i}>
            {item}: {value[item.toLowerCase()]}
          </li>
        ))}
      </ul>
      {totalFeedback > 0 && (
        <p>
          Total: {totalFeedback}
        </p>
      )}
      {totalFeedback > 0 && (
        <p>
            Positive: {Math.round((value.good / totalFeedback) * 100)}%
        </p>
     )}
    </div>
  );
}