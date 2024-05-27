import { RecentPosts } from "./components/recentPosts";
import { Intro } from "./components/intro";
import { FeaturedProjects } from "./components/featuredProjects";

export default function Page() {
  return (
    <section>
      <Intro />
      <div className="my-8">
        <RecentPosts />
      </div>
      <div className="my-8">
        <FeaturedProjects />
      </div>
    </section>
  );
}
