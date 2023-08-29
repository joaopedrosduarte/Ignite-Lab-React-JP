import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format, isValid } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import classNames from "classnames";

interface LessonsProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson(props: LessonsProps) {
  const { slug } = useParams<{ slug: string }>();

  const isActiveLesson = slug === props.slug;

  console.log(isActiveLesson);

  const isLessonAvaiable = isPast(props.availableAt);
  const DateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR }
  );

  return isLessonAvaiable ? (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{DateFormatted}</span>
      <div
        className={`border-gray-500 border rounded p-4 mt-2 group-hover:border-green-500 transition-colors ${
          isActiveLesson ? "bg-green-500 border-green-500" : ""
        }`}
      >
        <header className="flex itens-center justify-between">
          {isLessonAvaiable ? (
            <span
              className={`text-sm font-medium flex items-center gap-2 ${
                isActiveLesson ? "text-white" : "text-blue-500"
              }`}
            >
              <CheckCircle size={20} />
              Conteudo liberado
            </span>
          ) : (
            <span className="text-sm font-medium flex items-center gap-2 text-orange-500">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={classNames(
              "text-white rounded border border-green-300 px-2 py-[2px] text-xs",
              {
                "border-white": isActiveLesson,
              }
            )}
          >
            {props.type == "live" ? "AO VIVO" : "AULA PRATICA"}
          </span>
        </header>
        <strong
          className={`mt-5 block ${
            isActiveLesson ? "text-white" : "text-gray-200"
          }`}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  ) : (
    <div className="group">
      <span className="text-gray-300">{DateFormatted}</span>
      <div
        className={`border-gray-500 border rounded p-4 mt-2 group-hover:border-orange-500 transition-colors ${
          isActiveLesson ? "bg-green-500 border-green-500" : ""
        }`}
      >
        <header className="flex itens-center justify-between">
          {isLessonAvaiable ? (
            <span
              className={`text-sm font-medium flex items-center gap-2 ${
                isActiveLesson ? "text-white" : "text-blue-500"
              }`}
            >
              <CheckCircle size={20} />
              Conteudo liberado
            </span>
          ) : (
            <span className="text-sm font-medium flex items-center gap-2 text-orange-500">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={classNames(
              "text-white rounded border border-green-300 px-2 py-[2px] text-xs",
              {
                "border-white": isActiveLesson,
              }
            )}
          >
            {props.type == "live" ? "AO VIVO" : "AULA PRATICA"}
          </span>
        </header>
        <strong
          className={`mt-5 block ${
            isActiveLesson ? "text-white" : "text-gray-200"
          }`}
        >
          {props.title}
        </strong>
      </div>
    </div>
  );
}
