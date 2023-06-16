// import React from 'react'
import styles from './Card.module.css'
import PropTypes from 'prop-types';

function Card(props) {
  return (
    <>
        <div className={styles.main_div}>
            <div className={styles.card_div}
            style={{backgroundImage:`${props.image}`}}
            >
                <div className={styles.card_div_heading}>
                    <p>
                        {
                            props.title
                        }
                    </p>
                </div>
                <div className={styles.card_div_time}>
                    <div className={styles.question}>
                        {props.question}
                        <p>Questions</p>
                    </div>
                    <div className={styles.time}>
                        {props.time}
                        <p>Minutes</p>
                    </div>
                </div>
                
                <div className={styles.tag_div}>
                    {
                        props.tags.map((item, index) => {
                            return(
                                <>
                                    <div 
                                    key={index}
                                    className={styles.tags}
                                    >
                                        <img src={``} />
                                        {
                                            item
                                        }
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    </>
  )
}

Card.propTypes = {
    title: PropTypes.string,
    question: PropTypes.number,
    time: PropTypes.number,
    tags: PropTypes.array,
    image: PropTypes.string
}

export default Card