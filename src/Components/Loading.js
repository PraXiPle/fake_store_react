import style from './loading.module.css'
export default function Loading() {


    return (
        <div className={style.loadingBigDiv}>
            <h3>loading</h3>
            <div className={style.loadingDiv}></div>
        </div>
    )

}