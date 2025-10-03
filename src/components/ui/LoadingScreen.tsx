import AnimationGroup from "./AnimationGroup";


interface LoadingScreenProps {
    name: string,
}

const LoadingScreen = ({
    name,
}: LoadingScreenProps) => {
    return (
        <div className="flex justify-center items-center h-screen">
            <h1>{name}</h1>
        </div>
    );
};

export default LoadingScreen;