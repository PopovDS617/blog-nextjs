import React from 'react';
import Link from '../../../node_modules/next/link';
import Image from '../../../node_modules/next/image';
import {
  dateFormatter,
  imagePathFormatter,
} from '../../utils/formatting-tools';
import { Post } from '../../models/post.model';

const PostItem = (props: Post) => {
  const { title, date, image, slug, fragment } = props.post;
  const linkPath = `posts/${slug}`;
  return (
    <li key={props.id} className="post-item">
      <Link href={linkPath}>
        <a>
          <div className="post-item-image">
            <Image
              src={imagePathFormatter(slug, image)}
              alt={title}
              width={400}
              height={300}
              layout="responsive"
            />
          </div>
          <div className="post-item-content">
            <h3>{title}</h3>
            <time>{dateFormatter(date)}</time>
            <p>{fragment}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
