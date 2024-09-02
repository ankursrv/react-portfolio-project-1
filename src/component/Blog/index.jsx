import React from 'react'
import Section from '../Section'
import BlogCard from '../BlogCard'

const blogInfo = [
  {
    images: '/images/blog-thumb-1.jpg',
    user: 'John Doe',
    date: 'mar 8 2022',
    title: 'Quis Autem Vea Eum Iure Reprehendrit',
    discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simpl',
  },

  {
    images: '/images/blog-thumb-2.jpg',
    user: 'John Methew',
    date: 'mar 9 2023',
    title: 'Quis Autem Vea Eum Iure Reprehendrit',
    discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
  },

  {
    images:'/images/blog-thumb-3.jpg',
    user:'John Stain',
    date:'mar 10 2024',
    title:'Quis Autem Vea Eum Iure Reprehendrit',
    discription:'Lorem Ipsum is simply dummy text of the printing and typesetting',
  }
]
const Blog = () => {
  return (
    <Section id='blog' bgColor='dark' title='Blogs & Articles'>
      <div className='flex columns-3 gap-6 mt-[75px]'>
        {
          blogInfo.map((BlogItem, index) =>(
            <BlogCard key={index} {...BlogItem} />
          ))
        }
      </div>
    </Section>
  )
}

export default Blog
