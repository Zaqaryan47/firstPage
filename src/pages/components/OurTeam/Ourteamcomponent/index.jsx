import './style.scss';



const TeamComp = (props) => {

    const itemis = props.itemis
    return (

        <div className='blockteam'>
            <div className="imgradius">
                <div className="imgrad">
                <img className='imgwid' src={itemis.img} alt="" />

                </div>
                <h2 className="namemembers">{itemis.name}</h2>
                <p className="descriptmembers">{itemis.description}</p>


                <div className="icons1">
                    <div className="icon1">
                        <p className={itemis.icon[0]}></p>
                    </div>
                    <div className="icon1">
                        <p className={itemis.icon[1]}></p>
                    </div>
                    <div className="icon1">
                        <p className={itemis.icon[2]}></p>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default TeamComp