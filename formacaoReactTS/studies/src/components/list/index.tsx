import styles from './Lista.module.scss';
import Item from './item/index'

interface IProps {
    tarefa: React.ReactDOM,
    tempo: React.ReactDOM,
}

function Lista() {
    const tarefas =[{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'JavaScript',
        tempo: '01:30:00'
    }, {
        tarefa: 'TypeScript',
        tempo: '03:00:00'
    }]
    return(
        <aside className={styles.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        {...item}                        
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista