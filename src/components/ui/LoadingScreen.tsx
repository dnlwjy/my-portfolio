import DWLogo from "@/assets/dw-logo.svg?react";

const LoadingScreen = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <DWLogo
                aria-label="Loading..."
                className="md:w-40 md:h-40 w-20 h-20"
            />
        </div>

    );
};

export default LoadingScreen;