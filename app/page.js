import { getPostsForHompage } from "./lib/wordpress";
import HeroPost from "./components/homepagePosts/hero-post";
import MoreStories from "./components/homepagePosts/more-stories";
import Layout from "./components/layout/layout";

export default async function Home() {
  const posts = await getPostsForHompage();

  const firstPost = await posts[0];

  return (
    <Layout>
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
    </Layout>
  );
}
