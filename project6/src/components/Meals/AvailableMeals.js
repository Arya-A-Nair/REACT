import React from 'react'
import Card from '../UI/Card'
import DUMMY_MEALS from './data'
import styles from './MealsSummary.module.css'
import MealItem from './MealItem/MealItem'


const AvailableMeals = () => {
  return (
    <section className={styles.meals}>
    <Card>
        <ul>
            {DUMMY_MEALS.map(meal => {
                return <MealItem key={meal.id} {...meal} />
            })}
        </ul>
    </Card>
    </section>
  )
}

export default AvailableMeals