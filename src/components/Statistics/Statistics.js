import React from "react";
import style from './Statistics.module.css'



const Statistics = ({total, good,neutral,bad, positive}) => (

    <ul>
        <li className={style.good}>Good:{good}</li>
        <li className={style.bad}>Bad:{bad}</li>
        <li className={style.neutral}>Neutral:{neutral}</li>
        <li>Total:{total}</li>
        <li>Positive feedback:{positive.toFixed(0)}%</li>
    </ul>
)

export default Statistics