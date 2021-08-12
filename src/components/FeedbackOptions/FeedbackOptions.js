import React from "react";
import style from './FeedbackOptions.module.css'

const FeedbackOptions = ({clickGood, clickNeutral, clickBad}) => (
    <div>
    <button type="button" onClick={clickGood} className={style.good}>Good</button>
        <button type="button" onClick={clickBad} className={style.bad}>Bad</button>
        <button type="button" onClick={clickNeutral} className={style.neutral}>Neutral</button>
    </div>

)

export default FeedbackOptions