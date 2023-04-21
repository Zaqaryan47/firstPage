import './style.scss';



const MenuComp = (props)=>{
    const item = props.itemms
    return(
        <div className='item'>
            <img className='img' src={item.img} alt='menu' />
            <div className="menuname">
                <p className="name">
                    <p className="names">{item.name}</p>
                    <p style={{color:item.color}} className="price">{item.price}</p>
                </p>
                <p className="descript">{item.descript}</p>
            </div>

        </div>
    )
}

export default MenuComp