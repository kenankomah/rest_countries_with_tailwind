function SkeletonCard() {
    return (
        <div className="">
            <div className="block h-auto bg-white p-2 dark:bg-slate-300">
                <div className="px-2">
                    <div className="mx-0 my-2 h-40">
                        <img className="skeleton m-auto h-full w-full" alt="" />
                    </div>
                </div>
                <div className="mb-4 flex flex-col px-2">
                    <h3 className="mb-4 flex flex-col text-base leading-5">
                        <div className="skeleton m-auto mb-2 ml-0 mt-4 h-3 w-3/4"></div>
                        <div className="skeleton m-auto mb-2 h-3 w-full"></div>
                        <div className="skeleton m-auto mb-2 h-3 w-full"></div>
                        <div className="skeleton m-auto h-3 w-full"></div>
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default SkeletonCard;
