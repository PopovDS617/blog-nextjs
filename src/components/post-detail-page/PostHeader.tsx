import React from 'react';
import Image from '../../../node_modules/next/image';
import { Post } from '../../models/post.model';

const PostHeader = (props: Post) => {
  return (
    <header className="post-detail-header">
      <h1>{props.title}</h1>
      <Image src={props.image} alt={props.title} width={200} height={150} />
    </header>
  );
};

export default PostHeader;
