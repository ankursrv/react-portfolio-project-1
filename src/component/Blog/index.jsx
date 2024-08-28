import React from 'react'
import Section from '../Section'
import BlogCard from '../BlogCard'
const Blog = () => {
  return (
      <Section id='blog' bgColor='dark' title='Blogs & Articles'>
        <div className='flex columns-3 gap-6 mt-[75px]'>
              <BlogCard
                  images='/images/blog-thumb-1.jpg'
                  user='John Doe'
                  date='mar 8 2022'
                  title='Quis Autem Vea Eum Iure Reprehendrit'
                  discription='Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simpl'
              />
              <BlogCard
                  images='/images/blog-thumb-2.jpg'
                  user='John Doe'
                  date='mar 8 2022'
                  title='Quis Autem Vea Eum Iure Reprehendrit'
                  discription='Lorem Ipsum is simply dummy text of the printing and typesetting'
              />
              <BlogCard
                  images='/images/blog-thumb-3.jpg'
                  user='John Doe'
                  date='mar 8 2022'
                  title='Quis Autem Vea Eum Iure Reprehendrit'
                  discription='Lorem Ipsum is simply dummy text of the printing and typesetting'
              />
        </div>
    </Section>
  )
}

export default Blog
