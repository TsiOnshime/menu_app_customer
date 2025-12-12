import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiDjango,
  SiFirebase,
  SiMongodb,
  SiGit,
  SiFigma,
  SiAwsamplify,
  SiDocker,
} from "react-icons/si";
import { HiOutlineCode } from "react-icons/hi";
import { HiOutlineServer } from "react-icons/hi2";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";


const SkillCard = ({ icon: Icon, title, percent, variant, iconColor }) => {
  const progressStyles = {
    frontend: "bg-gradient-to-r from-[#1F2A45] to-[#2F5CFF]",
    backend: "bg-gradient-to-l from-[#1F2A45] to-[#2F5CFF]",
    tools: "bg-gradient-to-r from-gray-700 to-gray-400",
  };

  return (
    <div className="bg-white w-full shadow-sm rounded-xl p-5 border border-gray-100">
      <div className="flex items-center justify-center text-3xl mb-3">
        <Icon className={iconColor} />
      </div>

      <p className="text-center text-gray-700 font-medium mb-2">{title}</p>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`${progressStyles[variant]} h-2 rounded-full`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>

      <p className="text-center text-sm text-blue-500 font-semibold mt-2">
        {percent}%
      </p>
    </div>
  );
};



export default function Skills() {
  return (
    <section className="w-full py-20 bg-[#f8faff] flex flex-col items-center">
      {/* Title */}
      <h2 className="text-4xl font-bold text-gray-900">
        Skills & Technologies
      </h2>
      <div className="w-30 h-1 bg-gradient-to-r from-[#1F2A45] to-[#2F5CFF] mx-auto mt-3 rounded-full"></div>
      <p className="text-gray-500 mt-3 text-center max-w-xl">
        I work with modern technologies to build scalable, maintainable, and
        user-friendly applications
      </p>

      {/* Main grid of 3 columns */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl w-full px-5">
        {/* Frontend */}
        <div className="bg-white shadow-md rounded-3xl p-10 border border-gray-100">
          <div className="flex justify-center mb-5">
            <div className="p-4 bg-gradient-to-r from-[#1F2A45] to-[#2F5CFF] text-white rounded-2xl text-3xl">
              <HiOutlineCode />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-center">
            Frontend Development
          </h3>
          <p className="text-gray-500 text-center text-sm mb-8">
            Creating responsive and interactive user interfaces
          </p>

          <div className="grid grid-cols-2 gap-5">
            <SkillCard
              icon={SiReact}
              title="React"
              percent={95}
              variant="frontend"
            />
            <SkillCard
              icon={SiJavascript}
              title="JavaScript"
              percent={90}
              variant="frontend"
            />
            <SkillCard
              icon={SiTailwindcss}
              title="Tailwind"
              percent={92}
              variant="frontend"
            />
            <SkillCard
              icon={SiHtml5}
              title="HTML/CSS"
              percent={98}
              variant="frontend"
            />
          </div>
        </div>

        {/* Backend */}
        <div className="bg-white shadow-md rounded-3xl p-10 border border-gray-100">
          <div className="flex justify-center mb-5">
            <div className="p-4 bg-gradient-to-l from-[#1F2A45] to-[#2F5CFF] text-white rounded-2xl text-3xl">
              <HiOutlineServer />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-center">
            Backend Development
          </h3>

          <p className="text-gray-500 text-center text-sm mb-8">
            Building robust server-side applications and APIs
          </p>

          <div className="grid grid-cols-2 gap-5">
            <SkillCard
              icon={SiNodedotjs}
              title="Node.js"
              percent={85}
              variant="backend"
              iconColor="text-blue-700"
            />

            <SkillCard
              icon={SiDjango}
              title="Django"
              percent={80}
              variant="backend"
              iconColor="text-blue-700"
            />

            <SkillCard
              icon={SiFirebase}
              title="Firebase"
              percent={88}
              variant="backend"
              iconColor="text-blue-700"
            />

            <SkillCard
              icon={SiMongodb}
              title="MongoDB"
              percent={75}
              variant="backend"
              iconColor="text-blue-700"
            />
          </div>
        </div>

        {/* Tools & Others */}
        <div className="bg-white shadow-md rounded-3xl p-10 border border-gray-100">
          <div className="flex justify-center mb-5">
            <div className="p-4 bg-gradient-to-r from-gray-700 to-gray-400 text-white rounded-2xl text-3xl">
              <HiOutlineWrenchScrewdriver />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-center">Tools & Others</h3>
          <p className="text-gray-500 text-center text-sm mb-8">
            Development tools and workflow optimization
          </p>

          <div className="grid grid-cols-2 gap-5">
            <SkillCard icon={SiGit} title="Git" percent={92} variant="tools" />
            <SkillCard
              icon={SiFigma}
              title="Figma"
              percent={85}
              variant="tools"
            />
            <SkillCard
              icon={SiAwsamplify}
              title="AWS"
              percent={70}
              variant="tools"
            />
            <SkillCard
              icon={SiDocker}
              title="Docker"
              percent={65}
              variant="tools"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
