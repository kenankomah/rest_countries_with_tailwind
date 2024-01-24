import { useState } from "react";

type classListActions = "add" | "remove" | "contains" | "toggle";

// const html = document.querySelector("html");
const html = document.documentElement;

function themeClassHandler(action: classListActions) {
    return html?.classList[action]("dark");
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
        <header className="dark:bg-headerDark fixed left-0 right-0 top-0 z-10 h-20 bg-white px-4 drop-shadow-md md:px-14">
            <div className="relative top-1/2 mx-auto flex w-full max-w-7xl -translate-y-1/2 items-center justify-between space-x-4">
                <h1 className="text-sm font-bold md:text-2xl">
                    Where in the world?
                </h1>
                <div
                    onClick={themeToggle}
                    className="hover:bg-blue group flex cursor-pointer items-center"
                >
                    <div className="dark:group-hover:bg-darkHover mr-1 h-10 w-10 cursor-pointer rounded-full group-hover:bg-customGray">
                        <img
                            className="relative top-1/2 mx-auto block h-5 w-5 -translate-y-1/2 dark:h-7 dark:w-7"
                            src={themeIcon}
                            alt={themeText}
                        />
                    </div>
                    <span className="text-xs md:text-base">{themeText}</span>
                </div>
            </div>
        </header>
    );
}

export default Header;
