import './styles.scss'

const Dropdown = (props) => {
    return (
        <div className='dropdown'>
            <label>{props.label}</label>
            <select>
                {props.item.map(_item => {
                    return <option key={_item}>{_item}</option>
                })}
            </select>
        </div>
    )
}

export default Dropdown