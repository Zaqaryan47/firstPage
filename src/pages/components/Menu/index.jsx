import MenuComp from './component-menu';
import { food } from './component-menu/util';
import './style.scss';


const Menu = ()=>{

    return(
        <div className='L-Menu_block'>
            <div className="titlesss">
                <p className="gits"></p>
                <p className="text">Food Menu</p>
                <p className="gits"></p>
            </div>
            <div className="titles2">
                <p className="text2">Most Popular Items</p>
            </div>

            <div className="selectmenu">
                <p className="menuone">
                    <i className="icon-coffee icon"></i>
                    <div className="for-text">
                        <p className="text">Popular</p>
                        <p className="texts">Breakfast</p>
                    </div>
                </p>
                <p className="menuone">
                <i className="icon-hamburger icon"></i>
                     <div className="for-text">
                        <p className="text">Popular</p>
                        <p className="texts">Breakfast</p>
                    </div>
                </p>
                <p className="menuone">
                    <i className="icon-utensils-3 icon"></i>
                     <div className="for-text">
                        <p className="text">Popular</p>
                        <p className="texts">Breakfast</p>
                    </div>
                </p>

            </div>

            <div className="menu">
                <div className="left">
                {food.map(el => <MenuComp key={el.id} itemms={el}/>)}
                </div>
                <div className="right">
                {food.map(el => <MenuComp key={el.id} itemms={el}/>)}
                </div>

            </div>

        </div>
    )
}

export default Menu