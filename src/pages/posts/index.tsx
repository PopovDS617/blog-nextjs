import React from 'react';
import { getAllPosts } from '../../utils/posts-utils';

import AllPostList from '../../components/all-posts-page/AllPostList';

const AllPostsPage = (props) => {
  return <AllPostList posts={props.posts} />;
};

export const getStaticProps = () => {
  const postList = getAllPosts();

  return {
    props: {
      posts: postList,
    },
  };
};

export default AllPostsPage;
