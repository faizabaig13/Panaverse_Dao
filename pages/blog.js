import React from 'react'
import PostCard from '../components/PostCard';
import PostWidget from '../components/PostWidget';
import { getPosts } from '../services';
import '../styles/globals.css'
import NavBar from '../components/Navbar';
import { Footer } from '../components';
export default function blog({posts}) {
  return (
  <>
<div className="bg-green-100 container w-full max-w-full overflow-x-hidden overflow-y-hidden">
    <NavBar />
    <div className="container mx-auto px-10 mb-8">

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-8 col-span-1">
        {posts.map((post, index) => (
          <PostCard key={index} post={post.node} />
        ))}
      </div>
      <div className="lg:col-span-4 col-span-1">
        <div className="lg:sticky relative top-8">
          <PostWidget />

        </div>
      </div>
    </div>
  </div>
  <Footer />
  </div>
  </>
  )
}

export async function getStaticProps() {
    const posts = (await getPosts()) || [];
    return {
      props: { posts },
    };
  }

