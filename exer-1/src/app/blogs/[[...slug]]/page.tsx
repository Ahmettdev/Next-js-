import React from 'react'

 type Props = {
    params: {
        slug: string[]
    }
 }
function page({ params }: Props) {
    const slugPath = params.slug.join('/') || "home";

  return (
    <div>
        <h1 >your Path is : <span className='text-blue-600'>{slugPath} </span></h1>
    </div>
  )
}

export default page