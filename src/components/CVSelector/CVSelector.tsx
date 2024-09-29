import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CVLinks } from "../../constants/HeaderData";
import CVItem from "./CVItem";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faV } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

interface Props {}

const CVSelector = ({}: Props) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpenChange = (newValue: boolean): void => {
        setOpen(newValue);
    };

    return (
        <DropdownMenu.Root open={open} onOpenChange={() => handleOpenChange(!open)}>
            <DropdownMenu.Trigger asChild>
                <button
                    className="flex items-center gap-3 font-textSans text-xl md:text-2xl lg:text-3xl text-headerFont duration-300  LinkStyles hover:scale-[1.02]"
                    aria-label="Select CV"
                    onClick={() => handleOpenChange(!open)}
                >
                    <p>CV</p>
                    <FontAwesomeIcon
                        className={classNames(
                            "w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 transition-transform duration-300",
                            open ? "animate-rotate-down rotate-180" : "animate-rotate-up"
                        )}
                        icon={faV}
                    />
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    className="bg-headerBorderColor  rounded-md shadow-lg py-2 w-40 animate-slide-down origin-top duration-300"
                    sideOffset={10}
                >
                    {CVLinks.map((cv, idx) => (
                        <CVItem key={idx} cv={cv} />
                    ))}
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default CVSelector;
