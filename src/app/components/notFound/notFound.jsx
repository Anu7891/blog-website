"use client"
import CustomImage from "../../../../components/image/image";
import { ERROR_PLACEHOLDER_IMG } from "../../../../lib/config";
import Button from "../../../../components/customButton/customButton";
import { useRouter } from "next/navigation";  // Correct import

const NotFound = ({ errorText = "", className= "" }) => {
    const router = useRouter();

    const handleBackToHome = () => {
        router.push("/");  // Use push method from useRouter
    };

    return (
        <div className={`flex flex-col items-center justify-center ${className}`}>
            <CustomImage src={ERROR_PLACEHOLDER_IMG} alt="error_placeholder_icon" title="error_placeholder_icon" height={450} width={450} />
            {errorText && <p className="m-0 py-3">{errorText}</p>}
            <Button
                buttonText={"Back To Home"}
                className="w-1/2 md:w-1/5 lg:w-1/6 mt-2 capitalize"
                handleClick={handleBackToHome}  // Use handleBackToHome function
            />
        </div>
    );
};

export default NotFound;
