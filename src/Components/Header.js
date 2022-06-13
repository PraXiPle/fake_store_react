import style from './header.module.css'
export default function Header() {
return (
    <header className={style.headDiv}>
        <h1 className={style.storeTitle}>Fake Store</h1>
    </header>
    )
}