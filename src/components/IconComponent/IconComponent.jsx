import style from '../IconComponent/IconComponent.module.scss'

export function IconComponent({ src, alt }) {
    return (
      <>
        <img className={style.iconStyling} src={`src/assets/${src}`} alt={alt} />
      </>
    );
  }