import './style.scss';



const AboutComp = (props)=>{

    const items = props.items


    return(
        <div className='images'>

            <img className='img-block'  style={{width:items.width,height:items.height}} src={items.img} alt="" />

        </div>
    )
}


export default AboutComp