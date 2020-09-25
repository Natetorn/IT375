const express = require('express');
const router = express.Router();

const restaurants = require('../data');

router.get('/:id',(req,res)=>{
    const restaurantID  = restaurants.find(element => element.id === parseInt(req.params.id));
    if(restaurantID)
        res.json(restaurantID);
    else
        res.send('Wrong ID');
 });
    router.get('/:id',(req,res)=>{
    res.send('GET ONE API');
});
    router.post('/:id',(req,res)=>{
        let currentRestaurantID = restaurants.slice(-1)[0].id;
        console.log(currentRestaurantID);
        currentRestaurantID +=1;
        const newRestaurant = {
            id: currentRestaurantID,
            ...req.body
        };
        restaurants.push(newRestaurant);
    res.json(newRestaurant);

});
    router.put('/:id',(req,res)=>{
        const restaurantID =req.params.id;
        const restaurantIndex =restaurants.findIndex(element => element.id === parseInt(restaurantID));
        if(restaurantIndex >= 0){
            const updateRestaurant = {
                id:restaurantID,
                ...req.body
            };
            restaurants[restaurantIndex] = updateRestaurant;
            res.json(updateRestaurant);
     }else{}
     res.status(404).send('Wrong id cannot update the data');    
});
    router.delete('/:id',(req,res)=>{
     const restaurantID = req.params.id;
     const restaurantIndex = restaurants.findIndex(element => element.id === parseInt(restaurantID));
     if(restaurantIndex >= 0){
     restaurants.splice(restaurantIndex,1);
     res.json(restaurants);
     }else{}
     res.status(404).send('Wrong id cannot delete the day');
});
    module.exports = router;