import Header from "@/components/Header"
import BackgroundAnimation from "./BackgroundAnimation"

export default function Hero() {
    return (
        <div className="grid grid-cols-subgrid col-span-full h-screen">
            <Header />
            <h1>Home</h1>
            <p>Welcome to Emergence</p>
            <div className="absolute -z-10 top-0 left-0 h-screen w-full bg-linear-to-b from-lime-200 via-lime-400 to-lime-500">
              <BackgroundAnimation />
            </div>
        </div>
    )
}