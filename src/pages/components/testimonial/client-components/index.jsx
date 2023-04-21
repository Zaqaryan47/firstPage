import './style.scss';



const Clientcomp = (props)=>{
    // const props = props.iteem
    return(

        <div className='item-client'>
            <i className={`icon ${props.iteem.icon}`}/>
            <p className="text">{props.iteem.descript}</p>
            <div className="info">
                <img className='imgrad' src={props.iteem.img} alt="" />
                <div className="names">
                <h3 className="name">{props.iteem.name}</h3>
                <p className="hobby">{props.iteem.hobby}</p>
                </div>
                

            </div>

        </div>
    )


}

export default Clientcomp