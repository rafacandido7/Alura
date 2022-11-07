import TextField from '../TextField'
import Dropdown from '../Dropdown'

const Form = (props) => {
    const teamWorks = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    return (
        <section className='flex justify-center mt-20 w-4/5 bg-primary-gray shadow-[10px_10px_30px_0_rgba(0,0,0,0.06)] px-9 py-16 rounded'>
            <form>
                <h2 className='font-title text-2xl'>Preencha os dados para criar o card do colaborador</h2>
                <div className="font-paragraph">
                    <TextField label='Nome' placeholder='Digite seu nome'/>
                    <TextField label='Cargo' placeholder='Digite seu cargo'/>
                    <TextField label='Imagem' placeholder='Digite o indereço da imagem'/>
                    <Dropdown label='Time' item={teamWorks} placeholder='Escolha seu time'></Dropdown>
                </div>
            </form>
        </section>
    )
}

export default Form