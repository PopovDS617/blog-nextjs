import React from 'react';
import { getPostData, getPostsFiles } from '../../utils/posts-utils';

import PostContent from '../../components/post-detail-page/PostContent';

const PostPage = (props) => {
  return (
    <div>
      PostPage
      <PostContent post={props.post} />
    </div>
  );
};

export const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export default PostPage;
