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
        <section className='flex justify-center mt-20 w-4/5 bg-color-primary-gray shadow-[10px_10px_30px_0_rgba(0,0,0,0.06)] px-9 py-18 radious-'>
            <form >
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField label='Nome' placeholder='Digite seu nome'/>
                <TextField label='Cargo' placeholder='Digite seu cargo'/>
                <TextField label='Imagem' placeholder='Digite o indereço da imagem'/>
                <Dropdown label='Time' item={teamWorks} placeholder='Escolha seu time'></Dropdown>
            </form>
        </section>
    )
}

export default Form