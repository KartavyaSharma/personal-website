import { RecentPosts } from "./components/recentPosts";
import { Intro } from "./components/intro";
import { Projects } from "./components/projects";

export default function Page() {
  return (
    <section>
      <Intro />
      <div className="my-8">
        <RecentPosts />
      </div>
      <div className="my-8">
        <Projects />
      </div>
    </section>
  );
}
