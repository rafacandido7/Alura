import './styles.scss'
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
        <section className='form'>
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