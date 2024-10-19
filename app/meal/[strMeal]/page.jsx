import SingleMeal from '@/components/meal/SingleMeal'
import React from 'react'

const page = ({params}) => {
    const {strMeal}=params
    // console.log(params)
  return (
    <SingleMeal mealName={strMeal} />
  )
}

export default page