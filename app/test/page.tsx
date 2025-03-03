import React from 'react'
import { getMyCourses } from '../actions/getMyCourses'

const Page = async () => {
    const getCourses = await getMyCourses();
    console.log(getCourses);
  return (
    <div>{JSON.stringify(getCourses)}</div>
  )
}

export default Page