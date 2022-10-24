import './styles.scss'



const TextField = (props) => {
    return (
        <div className='text-field'>
            <label className='text-field'>{props.label}</label>
            <input placeholder={props.placeholder} />
        </div>
    )
}

export default TextField