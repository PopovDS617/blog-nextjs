import React from 'react';
import PostList from '../posts/PostList';

const FeaturedPosts = (props) => {
  return (
    <section className="featured-post-list">
      <h2>Featured posts</h2>
      <PostList posts={props.posts} />
    </section>
  );
};

export default FeaturedPosts;
