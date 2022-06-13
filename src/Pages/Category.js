import { useState, useEffect } from "react"
import Loading from '../Components/Loading'
import axios from 'axios'
import style from './category.module.css'
import CategoryComponent from "../Components/CategoryComponent"
export default function Category() {
    const [categoryArr, setCategoryArr] = useState()


    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
            .then((res) => setCategoryArr(res.data))
    }, [])

    return (
        categoryArr ?
            <>
                <h2 className={style.categoryTitle}>Categories</h2>
                <div className={style.bigCategoriesDiv}>
                    {categoryArr.map(v => {
                        return <CategoryComponent categoryName={v} key={v}/>
                    })}
                </div>
            </>
            :
            <Loading />
    )

}