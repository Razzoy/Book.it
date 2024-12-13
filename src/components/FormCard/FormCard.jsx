import style from './FormCard.module.scss'

export function FormCard({ pageTitle, action, children, bAction, bTitle}) {

    const handleSubmit = (e) =>{
        
    }

    return (
        <div className={style.containerStyle}>
            <section className={style.sectionHeader}>
                <h2>{pageTitle}</h2>
                <span className={style.splitter}></span>
            </section>
            <section className={style.sectionCard}>
                <form className={style.formStyling} onSubmit={handleSubmit}>
                {children}
                </form>
                <button type='submit'>{bTitle}</button>
            </section>

        </div>
    )
}
