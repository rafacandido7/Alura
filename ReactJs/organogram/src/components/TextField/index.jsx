const TextField = (props) => {
    return (
        <div className='mx-6'>
            <label className='block mb-2 text-base'>{props.label}</label>
            <input className='bg-white p-6 text-base shadow-[10px_10px_30px_0_rgba(0,0,0,0.06)] w-full border-none box-border' placeholder={props.placeholder} />
        </div>
    )
}

export default TextField