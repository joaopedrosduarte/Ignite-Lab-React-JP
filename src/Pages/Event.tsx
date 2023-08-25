import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Sidebar } from "../components/Sidebar";
import { ArrowCircleRight } from "phosphor-react";

export function Event(){
        const { slug } = useParams<{slug: string}>()

        return (
                <div className="flex flex-col min-h-screen">
                        <Header />
                        <main className='flex flex-1'>
                                { slug ? <Video lessonSlug={slug} /> :
                                        <div className="flex flex-1 justify-center items-center">
                                                <ArrowCircleRight size={96} color="#5c5c5c" weight="light" />
                                        </div>
                                }
                                <Sidebar />
                        </main>
                </div>
        )
}