import React from 'react';
import PostItem from './PostItem';

const PostList = (props: string[]) => {
  return (
    <ul className="post-list">
      {props.posts.map((item) => (
        <PostItem key={item.slug} post={item} />
      ))}
    </ul>
  );
};

export default PostList;
