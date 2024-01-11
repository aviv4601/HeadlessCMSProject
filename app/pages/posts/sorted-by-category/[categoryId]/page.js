import {
  getPostsByCategory,
  getCategoryNameByCategoryId,
  getCategories,
  getPosts,
} from "../../../../lib/wordpress";
import PostsPreview from "../../../../components/all-posts-page/posts-preview";
import SidelineContent from "../../../../components/all-posts-page/sideline";

export default async function SortedByCategoryPage({ params }) {
  const categoryData = await getCategoryNameByCategoryId(params.categoryId);

  const posts = await getPostsByCategory(params.categoryId);

  const categories = await getCategories();

  const allPosts = await getPosts();
  return (
    <div>
      <div className="container mx-auto px-5 py-5 ">
        <h1 className="font-bold text-3xl">Category: {categoryData.name}</h1>
      </div>
      <div className="container mx-auto px-5 md:max-w-full lg:flex max-w-2xl">
        <div className="lg:w-4/6 px-3">
          <PostsPreview posts={posts} />
        </div>
        <div className="lg:w-2/6 ml-8">
          <SidelineContent posts={allPosts} categories={categories} />
        </div>
      </div>
    </div>
  );
}
