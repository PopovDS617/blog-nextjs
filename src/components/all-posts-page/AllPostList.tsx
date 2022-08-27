import React from 'react';
import PostList from '../posts/PostList';

const AllPostList = (props) => {
  return (
    <section className="all-posts-list">
      <h1> All Postst</h1>
      <PostList posts={props.posts} />
    </section>
  );
};

export default AllPostList;
