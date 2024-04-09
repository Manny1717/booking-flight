import { PersonOutline } from "react-ionicons";
import { CalendarOutline } from "react-ionicons";
import postImage1 from "../assets/images/01.jpg";
import postImage2 from "../assets/images/02.jpg";
import postImage3 from "../assets/images/03.jpg";

const Blog = () => {
  const posts = [
    {
      image: postImage1,
      author: "Amin Najva",
      date: "Nov 15, 2023",
      title: "Most Visited Countries In Last 3 Years",
      description:
        "Laboris non amet cupidatat elit elit. Laborum dolor ex quis est labore quis.",
    },
    {
      image: postImage2,
      author: "Amin Najva",
      date: "Nov 15, 2023",
      title: "Most Visited Countries In Last 3 Years",
      description:
        "Laboris non amet cupidatat elit elit. Laborum dolor ex quis est labore quis.",
    },
    {
      image: postImage3,
      author: "Amin Najva",
      date: "Nov 15, 2023",
      title: "Most Visited Countries In Last 3 Years",
      description:
        "Laboris non amet cupidatat elit elit. Laborum dolor ex quis est labore quis.",
    },
  ];
  return (
    <div className="flex flex-col w-full pb-20 md:pb-[200px] px-8 gap-16 justify-center items-center">
      <div className="flex flex-col w-full items-center">
        <span className="font-semibold text-blue-500">Our Blog</span>
        <span className="font-semibold text-slate-700 text-3xl mt-1">
          Our Lastest Posts
        </span>
        <p className="max-w-[400px] text-center pt-4">
          Nisi non pariatur deserunt qui anim exercitation sunt commodo qui
          consectetur enim. Consequat ad nulla magna dolore exercitation
          adipisicing velit esse pariatur labore anim. Ullamco eiusmod duis
          deserunt velit cillum ullamco sunt ea fugiat anim dolore adipisicing
          sunt non.
        </p>
      </div>

      <div className="flex flex-col w-full items-center justify-center md:flex-row gap-8">
        {posts.map((post) => {
          return (
            <div
              key={post.title}
              className="bg-white p-[10px] rounded-[10px]"
              style={{ boxShadow: "0 0 40px 5px rgb(0 0 0 /5%)" }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-[400px] h-[270px] rounded-[10px]"
              />
              <div className="flex w-full items-center gap-10 pt-3 px-4">
                <div className="flex items-center gap-2">
                  <PersonOutline color="#60a5fa" />
                  <span className="text-slate-900 text-[15px]">
                    {post.author}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarOutline color="#60a5fa" />
                  <span className="text-slate-900 text-[15px]">
                    {post.date}
                  </span>
                </div>
              </div>
              <div className="px-4 py-5 text-[20px] font-semibold text-slate-800">
                <span>{post.title}</span>
              </div>
              <div className="px-4 leading-7 text-slate-700 max-[400px]">
                <span>{post.description}</span>
              </div>
              <div className="px-4 py-3 cursor-pointer font-medium text-blue-600">
                <span>Read More</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Blog;
