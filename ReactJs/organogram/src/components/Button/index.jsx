import './styles.scss'

const Button = (props) => {
    return (
            <button className='button' type='button'>{props.children}</button>
    )
}

export default Button