import SkeletonCard from "./skeletonCard";

function Skeleton() {
    const skeletonArray = Array.from({ length: 8 }, (value, i) => (
        <SkeletonCard key={i} />
    ));
    return (
        <div className="mx-auto mt-14 grid max-w-7xl gap-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {skeletonArray.map((skeleton) => skeleton)}
        </div>
    );
}

export default Skeleton;
