import Link from "next/link";
import Image from "next/image";

export const BlogItem = ({ post, profile }) => {
  const toText = (node) => {
    let tag = document.createElement("div");
    tag.innerHTML = node;
    node = tag.innerText;
    return node;
  };
  return (
    <Link href={post.link}>
      <div className='group flex flex-col justify-evenly items-center bg-slate-900 rounded-md border-2 border-gray-50 hover:scale-100 hover:cursor-pointer shadow-lg shadow-slate-600 p-2 pt-4 h-72 gap-4 z-10 overflow-hidden'>
        <div className='relative w-11/12 h-3/4'>
          <Image
            src={
              post.thumbnail
                ? post.thumbnail
                : "/images/medium_thumbnail_white.png"
            }
            fill={true}
            alt='thumbnail'
            style={{ objectFit: "fill" }}
          />
        </div>
        <h1 className='font-RobotoCondensed font-bold text-md tracking-widest uppercase'>
          {post.title}
          <i className='fa-solid fa-arrow-up-right-from-square px-2'></i>
          {/* {project.github ? (
            <i className='fa-brands fa-github'></i>
          ) : (
            <i className='fa-solid fa-arrow-up-right-from-square'></i>
          )} */}
        </h1>
        {/* <div className='absolute bg-zinc-800 top-0 bottom-16 left-0 right-0 z-30 flex flex-col justify-center items-center flex-wrap gap-2 transition-transform -translate-y-[15rem] group-hover:translate-y-0 opacity-90 p-2'>
          <p>{`${toText(post.description.substring(0, 50))}...`}</p>
        </div> */}
      </div>
    </Link>
  );
};
