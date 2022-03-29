/* eslint-disable array-callback-return */
import React from 'react'
import ArticleContent from './ArticleContent'
import { useParams } from 'react-router-dom'
import NotFound from './NotFound'

const Article = () => {
  const {name} = useParams()
  const article = ArticleContent.find((article) => article.name === name)
  if(!article) return <NotFound/>
  return (
    <>
    <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900">{article.title}</h1>
    <img
        className='lg:h-48 md:h-36 w-full object-cover object-center '
        src={article.thumbnail}
        alt='blog'
      />
  
    {article.content.map((paragraph,index) => (
      <p className='mx-auto leading-relaxed text-based mb-4' key={index}>{paragraph}</p>
    ))}
    </>
  )
}

export default Article