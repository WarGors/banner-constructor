import IMG_1 from '../../images//IMG_1.png' 
import IMG_2 from '../../images/IMG_2.png' 
import IMG_3 from '../../images/IMG_3.png' 
import './imagesList.css'

const images = [IMG_1, IMG_2, IMG_3];

const ImagesList = props => {
  return (
    <>
      <strong>Выберите картинку</strong>
      <ul>
        {
          images.map((img, index) => {
            return (
              <li
                className='list-item-img'
                key={index} 
                onClick={() => props.setState(prevState => ({...prevState, img}))}
              >
                <img 
                  src={img}
                  alt={`IMG_${index + 1}`}
                  width={'200px'}
                />
              </li>
            )
          })}
      </ul>
    </>
  )
}

export default ImagesList