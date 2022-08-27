import Hero from '../components/home-page/Hero';
import FeaturedPosts from '../components/home-page/FeaturedPosts';
import { getFeaturedPosts } from '../utils/posts-utils';
import { Post } from '../models/post.model';

const HomePage = (props: Post[]) => {
  return (
    <div>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </div>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1800,
  };
};

export default HomePage;
