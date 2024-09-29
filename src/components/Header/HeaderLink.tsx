import { NavLink, useLocation } from "react-router-dom";
import { HeaderLinkData } from "../../types/types";
import classNames from "classnames";

interface Props {
    data: HeaderLinkData;
}

const HeaderLink = ({ data }: Props) => {
    const { pathname } = useLocation();
    return (
        <NavLink
            to={data.path}
            state={{ prevPath: pathname }}
            className={({ isActive, isPending }) => {
                const activeLinkStyles = isActive ? "activeLinkStyles" : isPending ? "" : "";
                return classNames(
                    "font-textSans text-headerFont text-xl md:text-2xl lg:text-3xl duration-300 hover:scale-[1.02] hover:text-headerFontHover LinkStyles",
                    activeLinkStyles
                );
            }}
        >
            {data.name}
        </NavLink>
    );
};

export default HeaderLink;
