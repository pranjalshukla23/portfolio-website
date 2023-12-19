import Link from "next/link";
import Image from "next/image";

export const BlogItem = ({ post }) => {
  const toText = (node) => {
    let tag = document.createElement("div");
    tag.innerHTML = node;
    node = tag.innerText;
    return node;
  };
  return (
    <Link href={post.link}>
      <div className='group flex flex-col justify-evenly items-center bg-slate-900 rounded-md border-2 border-gray-50 hover:scale-100 hover:cursor-pointer shadow-lg shadow-slate-600 p-2 pt-4 h-72 gap-4 z-10 overflow-hidden'>
        <div className='relative w-11/12 h-48 border-2'>
          <Image
            src={
              post.thumbnail
                ? post.thumbnail
                : "/images/medium_thumbnail_black.png"
            }
            fill={true}
            alt='thumbnail'
            style={{ objectFit: "fill" }}
          />
        </div>
        <h1 className='font-RobotoCondensed font-bold text-xs tracking-widest uppercase h-12'>
          {post.title}
          <i className='fa-solid fa-arrow-up-right-from-square px-2'></i>
        </h1>
      </div>
    </Link>
  );
};
