import { ReactNode } from "react";
import { ThemeColors } from "../constants/types";

export type HeaderLinkData = {
    name: string;
    path: string;
    display: boolean;
    element: ReactNode;
};

export type CVLinkData = {
    name: string;
    path: string;
};

export type ThemeColor = (typeof ThemeColors)[number];

export type ThemeContextType = {
    theme: ThemeColor;
    handleThemeChange: (newThemeValue: (typeof ThemeColors)[number]) => void;
};


export type Animation = {
    
}