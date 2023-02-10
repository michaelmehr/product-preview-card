import './App.css'
import productImageDesktop from './assets/image-product-desktop.jpg'
import iconCart from './assets/icon-cart.svg'

function App() {

  return (
    <div className="App bg-cream">
      <div className="product-preview-card bg-white flex">
        <div className='product-image'></div>
        <div className='product-text flex'>
          <p className='product-type ff-sans-serif uppercase'>Perfume</p>
          <p className='product-name ff-serif'>Gabrielle Essence Eau De Parfum</p>
          <p className='text-dark-grayish-blue ff-sans-serif'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
          <p className='price flex ff-serif'>$149.99<span className='price-slashed ff-sans-serif'>$169.99</span></p>
          <button className='btn-add-to-cart ff-sans-serif flex'>
            <img className='cart' src={iconCart} ></img>
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
