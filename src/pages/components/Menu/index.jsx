import { useState } from 'react';
import MenuComp from './component-menu';
import { food } from './component-menu/util';
import './style.scss';


const Menu = ()=>{

    const [tabindex, setTabIndex]= useState(1)
    const [meal,setMeal] = useState(food.filter(el => el.key === 'num'))

    function one(){
        setMeal(food.filter(el => el.key === 'num'))
        setTabIndex(1)
    }
    function two(){
        setMeal(food.filter(el => el.key === 'num1'))
        setTabIndex(2)
    }
    function tree(){
        setMeal(food.filter(el => el.key === 'num3'))
        setTabIndex(3)
    }

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
                <p onClick={one} className={`menuone ${tabindex == 1? 'active-btn':''}`}>
                    <i className="icon-coffee icon"></i>
                    <div className="for-text">
                        <p className="text">Popular</p>
                        <p className="texts">Breakfast</p>
                    </div>
                </p>
                <p onClick={two} className={`menuone ${tabindex == 2? 'active-btn':''}`}>
                <i className="icon-hamburger icon"></i>
                     <div className="for-text">
                        <p className="text">Popular</p>
                        <p className="texts">Breakfast</p>
                    </div>
                </p>
                <p onClick={tree} className={`menuone ${tabindex == 3? 'active-btn':''}`}>
                    <i className="icon-utensils-3 icon"></i>
                     <div className="for-text">
                        <p className="text">Popular</p>
                        <p className="texts">Breakfast</p>
                    </div>
                </p>

            </div>

            <div className="menu">
                <div className="left">
                {meal.map(el => <MenuComp key={el.id} itemms={el}/>)}
                </div>
                <div className="right">
                {meal.map(el => <MenuComp key={el.id} itemms={el}/>)}
                </div>

            </div>

        </div>
    )
}

export default Menu