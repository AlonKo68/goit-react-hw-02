import css from './Options.module.css';

export default function Options ({buttons, onUpdate, onReset, totalFeedback}) {
    return (
        <div className={css.options}>
            <ul className={css.options_list}>
                {buttons.map((btn, i) => {
                    return (
                        <li key={i}>
                            <button type="button"
                                onClick={() => onUpdate(btn.toLowerCase())}>
                                {btn}
                            </button>
                        </li>
                    );
                })}
            </ul>
            {totalFeedback > 0 && (
                <button type="button" onClick={onReset}>
                    Reset
                </button>
            )}

        </div>
    );
}