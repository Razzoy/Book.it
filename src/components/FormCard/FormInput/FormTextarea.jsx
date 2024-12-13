import style from "./FormInput.module.scss"

export default function FormTextarea() {
    return (
        <div className={style.inputStyling}>
            <label htmlFor="description">Description</label>
            <textarea className={style.textareaStyling} name="description"
            id="description">
            </textarea>
        </div>

    )
}
