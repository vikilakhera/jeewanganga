import './mainScreen.css';

function MainScreen(props: any) {
  const { image, altText, heading, text } = props;
  return (
    <div className='mnsWrapper'>
      <div className='mnsImageWrapper'>
        <img src={image} alt={altText} className='mnsImage' />
      </div>
      <div className='mnsContent'>
        <h1 className='mnsHeading'>
          {heading}
        </h1>
        <p className='mnsText'>
          {text}
        </p>
      </div>
    </div>
  )
}

export default MainScreen;