import './imagesList.css'

const images = [
  'https://vignette.wikia.nocookie.net/heroes-unite/images/d/d2/Disenchantment-5b8512eba1a59.png/revision/latest?cb=20181212235225', 
  'https://vignette.wikia.nocookie.net/heroes-unite/images/0/0b/IMG_2.png/revision/latest/scale-to-width-down/1000?cb=20201129153901', 
  'https://vignette.wikia.nocookie.net/heroes-unite/images/0/08/Simpsonslogo2020tm.png/revision/latest?cb=20201129154740'];

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
                onClick={() => props.setImage('img', img)}
              >
                <img 
                  src={img}
                  alt={`IMG_${index + 1}`}
                  width='200px'
                />
              </li>
            )
          })}
      </ul>
    </>
  )
}

export default ImagesList