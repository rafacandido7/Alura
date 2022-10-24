import './styles.scss'
import TextField from '../TextField'

const Form = (props) => {
    return (
        <section className='form'>
            <form >
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField label='Nome' placeholder='Digite seu nome'/>
                <TextField label='Cargo' placeholder='Digite seu cargo'/>
                <TextField label='Imagem' placeholder='Digite o indereço da imagem'/>
            </form>
        </section>
    )
}

export default Form