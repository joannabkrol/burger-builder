import React from 'react';
import {withRouter} from 'react-router-dom';

import classes from './Burger.module.css';
import BurgerIngridient from './Burgeringidient/Burgeringridient';

const burger = (props) => {
    //console.log(props);
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngridient key={igKey + 1} type={igKey} />
        });
    })
    .reduce((arr, el) => { //.reduce is flattening the array, previously it was array of arrays, not it is only array
        return arr.concat(el)
    }, []);
    //if there is no ingredients:
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    //console.log(transformedIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngridient type="bread-top" />
            {transformedIngredients}
            <BurgerIngridient type="bread-bottom" />
        </div>
    );
}

//wuthRouter gives us access to match, history props (usually only components directly used in route have it)
export default withRouter(burger);