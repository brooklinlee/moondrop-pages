// css
import '../OneClementine/OneClementine.css'

// images
import orange from '../../assets/images/antonio-napodano-mjVN3RJVKd0-unsplash.jpg'

const OneClementine = () => {
  return (  
    <>
    <header>
      <div className="imgone"></div>
      <div className="imgtwo"></div>
      <div className="overlay-text">
        <h1>Clementine</h1>
        <p>Vibrant sun-kissed flavor in every bite</p>
      </div>
    </header>
    <section className="one">
      <img src={orange} alt="" />
      <div>
        <p>Peeling back the golden skin of a clementine releases a fragrant burst of citrus joy, a miniature sun captured in each delightful, tangy orb.</p>
      </div>
    </section>
    <section className="two">
      <div>
        <h2>Bighting into Sunshine</h2>
        <p>Clementines, a variety of mandarin orange, are cherished for their easy-to-peel, thin, and vibrant orange skin, unveiling juicy, segmented sweetness within. Bursting with a delightful balance of tartness and sweetness, these petite citrus wonders offer a refreshing and healthy snack. Their bright aroma and vivid flavor make clementines a beloved addition to winter seasons, bringing a burst of sunshine to cold days.</p>
        <button>Take a Bite</button>
      </div>
      <div></div>
    </section>
    <section className="three">
      <p>All about clementines</p>
      <h1>"In the simplicity of a clementine lies the essence of sunshine, each peel a testament to the warmth and sweetness nature can bestow in a single, perfect fruit."</h1>
      <p>- Someone Happy</p>
    </section>
    <section className="four">

    </section>
    </>
  )
}

export default OneClementine;