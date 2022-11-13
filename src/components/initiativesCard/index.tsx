import './initiaivesCard.css';

function InitiatvesCard(props: any) {
  const { image, altText, heading, text } = props;
  
  return (
    <div className="incWrapper">
      <div className="incImageWrapper">
        <img src={image} alt={altText} className='incImage' />
      </div>
      <div className="incContent">
        <h2 className="incHeading">
          {heading}
        </h2>
        <p className="incText">
          {text}
        </p>
        <div className='incDonateButtonWrapper'>
          <button className='incDonateButton'>
            Donate
          </button>
        </div>
      </div>
    </div>
  )
}

export default InitiatvesCard;