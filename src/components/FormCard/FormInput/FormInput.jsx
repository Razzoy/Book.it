import { IconComponent } from '../../IconComponent/IconComponent'
import style from './FormInput.module.scss'

export function FormInput({ type, id, label, value, src, alt }) {
    return (
        <div className={style.inputStyling}>
            <label htmlFor={id}>{label}</label>
            <div className={style.inputWrapper}>
                <input type={type} id={id} value={value} />
                <div className={style.inputIcon}>
                    <IconComponent src={src} alt={alt} />
                </div>
            </div>
        </div>
    )
}
