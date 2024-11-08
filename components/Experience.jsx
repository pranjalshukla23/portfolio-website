import { useInViewport } from "react-in-viewport";
import { useEffect, useRef, useState } from "react";

export const Experience = () => {
  const [showExperience, setShowExperience] = useState(false);
  const myRef = useRef();
  const { inViewport } = useInViewport(myRef);

  useEffect(() => {
    setShowExperience(inViewport);
  }, [inViewport]);
  return (
    <section id="experience" ref={myRef}>
      <div
        className={`flex flex-col justify-center items-center text-center text-white gap-4 my-24 transition-opacity ${
          showExperience
            ? "opacity-100 duration-500 delay-500 ease-in"
            : "opacity-0 opacity-100 duration-100 ease-in"
        }}`}
      >
        <h1 className="font-Anton font-extrabold text-2xl md:text-4xl text-white tracking-widest uppercase mb-8">
          Professional Experience
        </h1>
        <div className="space-y-4 w-full md:w-1/2">
        <details
            className="group [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-violet-700 pl-8 mx-2">
              <div className="font-medium text-white text-start text-md w-1/2">
                Python Developer @ Live Data Solutions
              </div>
              <span className="font-medium text-white text-md w-1/2">
                Oct &apos;24 - present
              </span>

              <svg
                className=" h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <ul className="list-disc list-outside flex flex-col items-start text-start p-8 mt-4 text-xl text-white bg-[#241d41] mx-2">
              <li>
              Developed RESTful APIs using Django framework to enhance system capabilities, integrating external data sources to support various project requirements.
              </li>
              <li>Utilized Python and SQL to extract and manipulate data from large databases based on client business queries.</li>
              <li>
              Created automated workflows to merge and analyze datasets, delivering insights to support client campaigns and strategic decisions.
              </li>
              <li>Provide troubleshooting and technical assistance, ensuring reliable system performance and seamless network operations.</li>
              <li>
              Manage technical queries, configure accounts, and maintain system documentation to support smooth workflows.
              </li>
            </ul>
          </details>
          <details
            className="group [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-violet-700 pl-8 mx-2">
              <div className="font-medium text-white text-start text-md w-1/2">
                Associate Software Engineer @ BetaFlux
              </div>
              <span className="font-medium text-white text-md w-1/2">
                Jan &apos;23 - present
              </span>

              <svg
                className=" h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <ul className="list-disc list-outside flex flex-col items-start text-start p-8 mt-4 text-xl text-white bg-[#241d41] mx-2">
              <li>
                Retrieve client data, and perform data cleaning & quality
                checking before upgrading the database in an optimized manner.
              </li>
              <li>Gather business requirements to architect applications.</li>
              <li>
                Collaborate with the product & design team to analyze better the
                end-user requirements.
              </li>
              <li>Inspect server code for speed optimization.</li>
              <li>
                Integration of user-facing elements developed by front-end
                developers with server-side logic
              </li>
              <li>
                Develop & implement highly responsive user interface components
                using React fundamental.
              </li>
              <li>
                Writing application interface code using JavaScript following
                React.js workflows.
              </li>
            </ul>
          </details>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-violet-700 pl-8 mx-2">
              <div className="font-medium text-white text-start text-md w-1/2">
                Full Stack Developer @ Web3Werx
              </div>
              <span className="font-medium text-white text-md w-1/2">
                Jan &apos; 21 - Dec &apos; 22
              </span>

              <svg
                className=" h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <ul className="list-disc list-outside flex flex-col items-start text-start p-8 mt-4 text-xl text-white bg-[#241d41] mx-2">
              <li>
                Ensured the technology implemented promoted efficiency, speed, &
                smooth functionality
              </li>
              <li>
                Participated in collaborative team efforts to resolve, find and
                implement efficiencies.
              </li>
              <li>
                Developed 10+ web applications by using responsive UI elements
                via React concepts for smooth performance
              </li>
              <li>
                Constructed 7+ user interface codes of web applications with
                frameworks React.js, Next.js, and JavaScript based on approved
                design
              </li>
              <li>
                Utilized libraries and frameworks like Material UI, Bootstrap,
                and Tailwind CSS for efficiently designing web applications.
              </li>
              <li>
                Employed state management library Redux Toolkit for constructing
                redux applications.
              </li>
              <li>
                Integrated user-facing elements developed by front-end
                developers with server-side logic.
              </li>
              <li>
                Utilized relational databases and NoSQL databases to streamline
                data for user applications.
              </li>
              <li>
                Composed backend for websites and constructed RESTful APIs with
                Node.js and Express.js.
              </li>
            </ul>
          </details>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-violet-700 pl-8 mx-2">
              <div className="font-medium text-white text-start text-md w-1/2">
                Software Engineering intern @ Diebold Nixdorf
              </div>
              <span className="font-medium text-white text-md w-1/2">
                Jun &apos; 21 - Dec &apos; 21
              </span>

              <svg
                className=" h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <ul className="list-disc list-outside flex flex-col items-start text-start p-8 mt-4 text-xl text-white bg-[#241d41] mx-2">
              <li>
                Developed a 360-degree customer recommendation engine using
                cypher query language and graph database system Neo4j.
              </li>
              <li>
                Facilitated the research and development of business-oriented
                data science solutions on graph database systems such as Neo4j,
                and Arango DB.
              </li>
              <li>
                Collaborated with senior leaders, approached problems & found
                solutions.
              </li>
              <li>Documented & tested new software applications.</li>
            </ul>
          </details>
        </div>
      </div>
    </section>
  );
};
