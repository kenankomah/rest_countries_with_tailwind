import { useState } from "react";

type classListActions = "add" | "remove" | "contains" | "toggle";

const html = document.querySelector("html");

function themeClassHandler(action: classListActions) {
    return html?.classList[action]("dark-theme");
}

function Header() {
    localStorage.getItem("darkMode") === "true"
        ? themeClassHandler("add")
        : themeClassHandler("remove");

    const isDarkMode = themeClassHandler("contains");
    const [darkMode, setDarkMode] = useState(isDarkMode);

    function themeToggle() {
        themeClassHandler("toggle");
        setDarkMode(!darkMode);
        localStorage.setItem("darkMode", (!darkMode).toString());
    }

    const themeText = darkMode ? "Light Mode" : "Dark Mode";
    const themeIcon = darkMode
        ? "/assets/light_mode_icon.svg"
        : "/assets/dark_mode_icon.svg";

    return (
        <header className="fixed top-0 left-0 right-0 h-20 bg-white drop-shadow-md">
            <div className="flex space-x-4 w-full max-w-7xl justify-between px-14 mx-auto relative top-1/2 -translate-y-1/2 ">
                <h1 className="text-2xl font-bold">Where in the world?</h1>
                <div
                    onClick={themeToggle}
                    className="flex items-center hover:bg-blue"
                >
                    <div className="">
                        <img className="" src={themeIcon} alt={themeText} />
                    </div>
                    <span className="">{themeText}</span>
                </div>
            </div>
        </header>
    );
}

export default Header;
