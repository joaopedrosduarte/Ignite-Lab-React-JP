import { DefaultUi, Player, Youtube } from "@vime/react";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
  Spinner,
} from "phosphor-react";
import "@vime/core/themes/default.css";
import { gql, useQuery } from "@apollo/client";
import { useGetLessonBySlugQuery } from "../graphql/generated";

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
  });

  if (!data || !data.lesson) {
    return <div className="flex gap-4 flex-1 justify-center items-center flex-col">
		<Spinner className="motion-safe:animate-spin" size={96} color="#5c5c5c" weight="light" />
		<strong className="text-lg text-[#707070]">Carregando</strong>
	</div>;
  }
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-h-[1100px] max-w-[80vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex gap-16 items-start">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>
            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                  src={data.lesson.teacher.avatarURL}
                  alt="foto do professor"
                />
                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-sm text-gray-200 block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="flex-col flex gap-4">
            <a
              href="#"
              className="flex text-sm items-center gap-2 justify-center rounded p-4 font-bold bg-green-500 transition-colors hover:bg-green-700"
            >
              <DiscordLogo size={24} />
              COMUNIDADE DO DISCORD
            </a>
            <a
              href="#"
              className="flex text-sm items-center gap-2 justify-center rounded p-4 font-bold text-blue-500 border-blue-500 border transition-colors hover:text-gray-900 hover:bg-blue-500"
            >
              <Lightning size={24} />
              ACESSE O DESAFIO
            </a>
          </div>
        </div>
        <div className="gap-8 mt-20 grid grid-cols-2">
          <a
            href="#"
            className="bg-gray-700  rounded  overflow-hidden  flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material complementar</strong>
              <p className="text-sm text-gray200 mt-2">
                Material complementar para acelerar o seu desenvolvimento
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
          <a
            href="#"
            className="bg-gray-700  rounded  overflow-hidden  flex items-stretch hover:bg-gray-600 transition-colors gap-6"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material complementar</strong>
              <p className="text-sm text-gray200 mt-2">
                Material complementar para acelerar o seu desenvolvimento
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
