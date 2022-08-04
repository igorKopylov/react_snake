import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import apple from '../../assets/food/apple.svg';
import banana from '../../assets/food/banana.svg';
import strawberry from '../../assets/food/strawberry.svg';
import watermelon from '../../assets/food/watermelon.svg';
import BackButton from '../../components/BackButton';
import SaveButton from '../../components/SaveButton';
import { selectGame } from '../../redux/game/selectors';
import { setFoodImage } from '../../redux/game/slice';
import { useAppDispatch } from '../../redux/store';

const Wrapper = styled.div`
    height: 200px;
    margin: 100px auto;
    margin-bottom: 200px;
`;

const Title = styled.h1`
    font-size: 60px;
    width: 150px;
    margin: 0 auto;
    text-align: center;
`;

const FoodList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 550px; 
    margin: 20px auto;

    li {
       text-align: center;
       cursor: pointer;

       img {
        margin-bottom: 20px;
       }
    }
`;

export const foodList = [
    { imageUrl: apple, title: 'apple' },
    { imageUrl: banana, title: 'banana' },
    { imageUrl: strawberry, title: 'strawberry' },
    { imageUrl: watermelon, title: 'watermelon' }
]

const Food = () => {
    const [foodId, setFoodId] = useState(0)
    const dispatch = useAppDispatch()

    return (
        <>
            <BackButton />
            <Wrapper>
                <Title>Food</Title>
                <FoodList>
                    <h1></h1>
                    {
                        foodList.map((food, i) => <li onClick={() => setFoodId(i)} key={i}>
                            <img width={foodId === i ? 80 : 50} height={foodId === i ? 80 : 50} src={food.imageUrl} />
                            <p>{food.title}</p>
                        </li>)
                    }
                </FoodList>
            </Wrapper>
            <SaveButton onClickSave={() => dispatch(setFoodImage(foodId))} />
        </>
    )
}

export default Food