import css from "./Options.module.css"

export default function Options({onUpdate, isFeedback}) {
    return (
      <ul className={css.optionsList}>
        <li><button className={css.optionsButton} onClick={() => onUpdate("good")}>
          Good
        </button></li>
        <li><button className={css.optionsButton} onClick={() => onUpdate("neutral")}>
          Neutral
        </button></li>
        <li><button className={css.optionsButton} onClick={() => onUpdate("bad")}>
          Bad
        </button></li>

       {isFeedback && <li><button className={css.optionsButton} onClick={() => onUpdate("reset")}>
          Reset
        </button></li>}
        
    </ul>
    )
}