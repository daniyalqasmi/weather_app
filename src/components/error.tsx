import Animation from "../../public/error.json"
import Lottie from "lottie-react";

const Error = () => {
  return (
    <div>
      <div className="mx-auto">
                {/* component */}
                <div className="mt-20 flex flex-col items-center justify-center">
                    <div className="flex flex-col bg-black/40 rounded p-4 w-full max-w-xs">
                        <Lottie animationData={Animation}/>
                        <h1 className="text-base font-semibold tracking-tight text-white text-center">Pleas make sure you have write correct city name </h1>
                    </div>
                    
                </div>
            </div>
    </div>
  )
}

export default Error
