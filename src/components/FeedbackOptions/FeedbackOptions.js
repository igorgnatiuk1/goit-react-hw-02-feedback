import React from "react";
import style from './FeedbackOptions.module.css'

const FeedbackOptions = ({clickButton, options}) => (
    <div>


        {options.map((option) => (
                <button key={option} type="button"  onClick={() => {clickButton(option)} }
                    className={style.good}>{option}</button>
            )
        )}
    </div>  )

export default FeedbackOptions
