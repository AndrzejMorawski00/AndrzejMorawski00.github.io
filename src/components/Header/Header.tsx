import { HeaderLinks } from "../../constants/HeaderData";
import CVSelector from "../CVSelector/CVSelector";
import HeaderLink from "./HeaderLink";
import ThemeSwitch from "./ThemeSwitch";

interface Props {}

const Header = ({}: Props) => {
    return (
        <div className="flex justify-between items-center flex-wrap gap-2 py-3 xl:py-5 px-10 xl:px-14 border-b-4 border-headerBorderColor">
            {HeaderLinks.map((link, idx) => (
                <HeaderLink key={idx} data={link} />
            ))}
            <CVSelector />
            <ThemeSwitch />
        </div>
    );
};

export default Header;
