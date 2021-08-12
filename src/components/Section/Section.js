import style from './Section.module.css'
const Section = ({title, children}) => (
    <section>
    <h1 className={style.name}>{title}</h1>
    {children}
    </section>
)

export default Section