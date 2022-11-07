const Dropdown = (props) => {
    return (
        <div className='text-base'>
            <label className="block mb-2">{props.label}</label>
            <select className=" bg-white shadow-[10px_10px_30px_0_rgba(0,0,0,0.06)] w-full border-none p-6 box-border">
                {props.item.map(_item => {
                    return <option key={_item}>{_item}</option>
                })}
            </select>
        </div>
    )
}

export default Dropdown