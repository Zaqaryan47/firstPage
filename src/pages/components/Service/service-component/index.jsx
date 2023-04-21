import './style.scss';



const Copmhome =  (props)=>{

    const item = props.item


    return(
        <div className='block-component'>
            <div className="paddind-componens">

            <i style={{fontSize:item.size}} className={`chencgecolor ${item.icon}`}></i> 
            <h1 className='L-name'>{item.name}</h1>
            <p className="description">{item.desqription}</p>

            </div>

         </div>

    )

}


export default Copmhome