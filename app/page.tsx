import Posts from "./components/Posts"
import MyProfilePic from './components/MyProfilePic'

export const revalidate = 10     //when you deploy the app, set this to 86400 (1 day in s)

export default function Home() {
    return (
        <div className="mx--auto">
            <MyProfilePic />
            <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
                Hello and Welcome!👋🏻
                <span className="whitespace-nowrap">
                  I'm <span className="font-bold">Eve.</span>
                </span>
            </p>
            {/* @ts-expect-error Server Component */}
            <Posts />
        </div>
    )
}
