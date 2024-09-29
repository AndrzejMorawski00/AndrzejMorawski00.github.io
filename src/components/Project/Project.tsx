import { ProjectData } from "../../types/AppData";

interface Props {
    project: ProjectData;
}

const Project = ({ project }: Props) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-3">
                <h2 className="text-mainFont text-xl xl:text-2xl">Description:</h2>
                <p className="text-l xl:text-xl ml-2 text-dataDescription">{project.description}</p>
            </div>
            <div>
                <ul className="flex flex-wrap gap-1 items-center">
                    <li className="text-mainFont text-xl xl:text-2xl">Tech Stack:</li>
                    {project.techStack.map((tech, idx) => (
                        <li className="text-xl xl:text-2xl text-dataDescription" key={idx}>
                            {idx !== project.techStack.length - 1 ? `${tech}, ` : `${tech}.`}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-col gap-2 mt-2 pb-5 lg:pb-0">
                <a
                    href={project.repoLink}
                    className="font-textSans w-fit whitespace-nowrap text-xl xl:text-2xl text-mainFont transition duration-300 hover:text-mainIconHover"
                    target="_blank"
                >
                    Source Code
                </a>
                {project.livePreview ? (
                    <a
                        href={project.livePreview}
                        className="font-textSans w-fit whitespace-nowrap text-xl xl:text-2xl text-mainFont transition duration-300 hover:text-mainIconHover"
                        target="_blank"
                    >
                        Live Preview
                    </a>
                ) : null}
            </div>
        </div>
    );
};

export default Project;
