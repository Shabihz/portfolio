import Heading from './Heading'
import React from 'react'
import Card from './Card'

const data =[
    {
        id:0,
        title:"Static Resume",
        desc:"",
        img:"/staticresume.png",
        tags:["React","Node","CSS"],
    },
    {
        id:1,
        title:"Dynamic Resume",
        desc:"",
        img:"/dynamicresume.png",
        tags:["React","Node","CSS","Typescript"],
    },
    {
        id:2,
        title:"Editable Resume",
        desc:"",
        img:"/editableresume.png",
        tags:["React","Node","CSS","Typescript"],
    },
    {
        id:3,
        title:"Shareable Resume",
        desc:"",
        img:"/shareableresume.png",
        tags:["React","Node","CSS","Typescript"],
    }
]

const projects = () => {
  return (
    <div id='projects' className='ccontainer pt-32'>
      <Heading title='My Projects'/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el)=>(<Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default projects
