import { Lesson } from "./Lesson";
import { useGetLessonsQuery } from "../graphql/generated";
import { useState } from "react";

export function Sidebar() {
  const { data } = useGetLessonsQuery();
  const [qtdLessons, setQtdLessons] = useState(0);
  const [sidebarPaginationArray, setSidebarPaginationArray] = useState([0, 4]);

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-700">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.slice(qtdLessons, qtdLessons + 4).map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
}
