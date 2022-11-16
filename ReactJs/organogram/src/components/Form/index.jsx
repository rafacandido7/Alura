import './styles.scss'
import TextField from '../TextField'
import Dropdown from '../Dropdown'
import Button from '../Button'

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

    const toSave = (evento) => {
        evento.preventDefault()
        console.log('Form submitted')
    }

    return (
        <section className='form'>
            <form onSubmit={() => toSave()}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField mandatory={true} label='Nome' placeholder='Digite seu nome'/>
                <TextField mandatory={true} label='Cargo' placeholder='Digite seu cargo'/>
                <TextField label='Imagem' placeholder='Digite o endereço da imagem'/>
                <Dropdown mandatory={true} label='Time' item={teamWorks} placeholder='Escolha seu time'></Dropdown>
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form