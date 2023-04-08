import { useState } from "react";
import { Tab } from "@headlessui/react";

// Based on : https://headlessui.com/react/tabs

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let [categories] = useState({
    Desktop: [
      {
        id: 1,
        title: "Title 1",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
        img: "https://www.hebergeur-image.com/upload/88.174.47.6-6405a7f90a747.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsum, doloremque recusandae accusantium explicabo, molestias provident aspernatur dolorem ab consequatur eveniet eligendi, delectus ipsam ea animi aut quas nihil inventore.",
      },
      {
        id: 2,
        title: "Title 2",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
        img: "https://www.hebergeur-image.com/upload/88.174.47.6-6405a815c02fa.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsum, doloremque recusandae accusantium explicabo, molestias provident aspernatur dolorem ab consequatur eveniet eligendi, delectus ipsam ea animi aut quas nihil inventore.",
      },
    ],
    Tracker: [
      {
        id: 1,
        title: "Title 3",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
        img: "https://www.hebergeur-image.com/upload/88.174.47.6-6405a82fcc64e.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsum, doloremque recusandae accusantium explicabo, molestias provident aspernatur dolorem ab consequatur eveniet eligendi, delectus ipsam ea animi aut quas nihil inventore.",
      },
      {
        id: 2,
        title: "Title 4",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
        img: "https://www.hebergeur-image.com/upload/88.174.47.6-6405a85a54c7c.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsum, doloremque recusandae accusantium explicabo, molestias provident aspernatur dolorem ab consequatur eveniet eligendi, delectus ipsam ea animi aut quas nihil inventore.",
      },
    ],
    IMS: [
      {
        id: 1,
        title: "Title 5",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
        img: "https://www.hebergeur-image.com/upload/88.174.47.6-6405a877306f1.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsum, doloremque recusandae accusantium explicabo, molestias provident aspernatur dolorem ab consequatur eveniet eligendi, delectus ipsam ea animi aut quas nihil inventore.",
      },
      {
        id: 2,
        title: "Title 6",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
        img: "https://www.hebergeur-image.com/upload/88.174.47.6-6405a8903b21b.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsum, doloremque recusandae accusantium explicabo, molestias provident aspernatur dolorem ab consequatur eveniet eligendi, delectus ipsam ea animi aut quas nihil inventore.",
      },
    ],
  });

  return (
    <div className="bg-light">
      <h2 className="pt-10 underline underline-offset-8 font-poppins font-semibold text-4xl text-center text-secondaryLight">
        Software
      </h2>
      <p className="font-poppins text-lg text-center p-10 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        voluptas beatae quasi excepturi vero accusantium harum magnam non
        tempore similique ad rerum provident, eveniet iusto placeat minima esse,
        explicabo iure? Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Ullam iste ducimus eaque. Sed veniam soluta consequuntur? Nesciunt
        reiciendis tempora ipsam ut dolore repellendus cumque quas hic vero. Id,
        dicta sit?
      </p>
      <div className="pb-16 sm:px-0 font-poppins lg:flex flex-col justify-center lg:ml-20 lg:mr-20">
        {/* Pills bar */}
        <Tab.Group>
          <Tab.List className="flex justify-between rounded-full bg-contrast  border border-contrast">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-96 rounded-full py-2.5 text-2xl font-medium leading-5 text-dark",
                    " ring-opacity-60 ring-offset-2 ring-offset-contrast focus:bg-primaryLight focus:text-white font-bold focus:outline-none",
                    selected
                      ? "text-black hover:text-white>"
                      : "lg:ml-20 lg:mr-20 text-black hover:text-primaryLight"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          {/* Post style */}
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, id) => (
              <Tab.Panel
                key={id}
                className={classNames(
                  "rounded-xl bg-light p-6 shadow-md",
                  "bg-white ring-white ring-opacity-60 ring-offset-2 ring-offset-light focus:outline-none focus:ring-2"
                )}
              >
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative rounded-md p-4 hover:bg-white"
                    >
                      <h3 className="text-xl font-medium leading-5 text-secondaryDark">
                        {post.title}
                      </h3>
                      <div className="lg:flex">
                        <img
                          src={post.img}
                          alt=""
                          className="rounded-md shadow-md w-52"
                        />
                        <div className="lg:flex flex-col">
                          <p className="p-4">{post.desc}</p>
                          <hr />
                          <p className="p-4">{post.desc}</p>
                        </div>
                      </div>
                      <ul className="mt-1 flex text-xs font-normal leading-4 text-black">
                        <li>{post.date}</li>
                        <li>&middot;</li>
                        <li>{post.commentCount} comments</li>
                        <li>&middot;</li>
                        <li>{post.shareCount} shares</li>
                      </ul>
                    {/* Redirect links on click in posts */}
                      <a
                        href="#"
                        alt=""
                        className={classNames(
                          "absolute inset-0 rounded-md",
                          "ring-white focus:z-10 focus:outline-none focus:ring-2"
                        )}
                      />
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
