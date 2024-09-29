import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CVLinkData } from "../../types/types";

interface Props {
    cv: CVLinkData;
}

const CVItem = ({ cv }: Props) => {
    return (
        <DropdownMenu.Item className="flex items-center font-medium tracking-wider px-4 py-2 text-headerFont text-lg lg:text-xl 2xl:text-2xl hover:text-headerUnderlineActive transition-colors duration-300 cursor-pointer">
            <a href={cv.path} target="_blank">
                {cv.name}
            </a>
        </DropdownMenu.Item>
    );
};

export default CVItem;
