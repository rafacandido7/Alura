import './styles.scss'

const TextField = (props) => {

    const modifiedPlaceholder = `${props.placeholder}...`

    let value = ''

    const onDigited = (e) => {
        value = e.target.value
    }

    return (
        <div className='text-field'>
            <label>{props.label}</label>
            <input value={value} onChange={onDigited} required={props.mandatory} placeholder={modifiedPlaceholder} />
        </div>
    )
}

export default TextField