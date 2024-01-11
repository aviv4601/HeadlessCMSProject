import { getPostsForHompage } from "./lib/wordpress";
import HeroPost from "./components/homepage-posts/hero-post";
import MoreStories from "./components/homepage-posts/more-stories";

export default async function Home() {
  const posts = await getPostsForHompage();

  const firstPost = await posts[0];

  return (
    <div className="container mx-auto xl:px-5 sm:px-3 my-4 ">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blogeek
      </h1>
      <HeroPost post={firstPost} />
      <div>
        <div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
            More Stories
          </h2>
        </div>
        <div>
          <MoreStories posts={posts} />
        </div>
      </div>
    </div>
  );
}
