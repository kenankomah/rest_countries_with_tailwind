function SkeletonCard() {
    return (
        <div className="">
            <a
                className="card block h-auto bg-white p-2"
                id="card-link"
                target="_blank"
            >
                <div className="card__body px-2">
                    <div className="card__body body__img mx-0 my-2 h-40">
                        <img
                            className="skeleton m-auto h-full w-full"
                            alt=""
                            id="cover-img"
                        />
                    </div>
                </div>
                <div className="card__header mb-4 flex flex-col px-2">
                    <h3
                        className="card__header header__title mb-4 flex flex-col text-base leading-5"
                        id="card-title"
                    >
                        <div className="skeleton skeleton-text skeleton-text__small m-auto mb-2 ml-0 mt-4 h-3 w-3/4"></div>
                        <div className="skeleton skeleton-text m-auto mb-2 h-3 w-full"></div>
                        <div className="skeleton skeleton-text m-auto mb-2 h-3 w-full"></div>
                        <div className="skeleton skeleton-text m-auto h-3 w-full"></div>
                    </h3>
                </div>
            </a>
        </div>
    );
}

export default SkeletonCard;
