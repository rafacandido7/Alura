import Botao from "../button";
import style from './Formulario.module.scss';

function Formulario() {
    return (
        <form className={style.novaTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                Adicione um novo Estudo
                    <input 
                        type="text" 
                        name="tarefa" 
                        id="tarefa" 
                        placeholder="O que você quer estudar?" 
                        required
                    />
                </label>
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                    <input 
                        type="time"
                        name="tempo"
                        step="1"
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required 
                    />
                </label>
            </div>
            <Botao>
                Adicionar
            </Botao>
        </form>
    )
}

export default Formulario