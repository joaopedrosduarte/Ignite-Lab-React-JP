import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";


export function Subscribe(){
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber, {loading}] = useCreateSubscriberMutation()

    async function handleSubscriber(event:FormEvent) {
        event.preventDefault()
        createSubscriber({
            variables: {
                name,
                email,
            }
        })

        navigate('/event')
    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="flex w-full max-w-[1100px] justify-between items-center mt-20 mx-auto gap-4">
                <div className="max-w-[640px]">
                    <Logo />
                    <h1 className="mt-8 text-[2.5rem] leading-tight">Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong></h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.</p>
                </div>
                <div>
                    <div className="p-8 bg-gray-700 border border-gray-700 rounded">
                        <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
                        <form action="" onSubmit={handleSubscriber} className="flex flex-col w-full gap-2">
                            <input type="text" placeholder="Seu nome completo" onChange={event => setName(event.target.value)} className="bg-gray-900 rounded px-5 h-14"/>
                            <input type="email" placeholder="Digite seu E-mail" onChange={event => setEmail(event.target.value)} className="bg-gray-900 rounded px-5 h-14"/>
                            <button type="submit" disabled={loading} className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50">
                                Garantir minha vaga
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <img src="./src/assets/codeMockup.png" alt="codigo" className="mt-10" />
        </div>
    )
}