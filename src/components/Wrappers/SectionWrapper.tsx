import { ReactNode } from "react";

interface Props {
    sectionName: string;
    display: boolean;
    children: ReactNode;
}

const SectionWrapper = ({ display, sectionName, children }: Props) => {
    return (
        <div className="flex flex-col gap-2">
            {display && (
                <h2 className="font-textSerif text-2xl sm:text-3xl md:text-[2.5rem] lg:text-5xl tracking-wider text-mainFont font-semibold
                underline ml-5 mt-5 md:ml-7 md:mt-7 lg:ml-10 lg:mt-10 underline-offset-4">
                    {sectionName}:
                </h2>
            )}
            {children}
        </div>
    );
};

export default SectionWrapper;
