import React from "react";
import { useContext } from "react";
import Overview from "../components/card/overview";
import Preview from "../components/card/preview";
import Header from "../components/header";
import { useTheme } from "../context/ThemeContext";
import '../App.scss'



export default function HomePages() {
    const { darkMode } = useTheme();
    const mainStyle = darkMode ? "dark" : "light";
    return (
            <main className={mainStyle}>
                <Header/>
                <Preview />
                <Overview />
            </main>
       
    )

}