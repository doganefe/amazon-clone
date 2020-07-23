import React from 'react'
import Product from './Product'
import './Home.css'
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="" />
      <div className="home__row">
        <Product
          id="1"
          title="Samsung 50 TU8500 Crystal UHD TV"
          price={11.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/51tPpPvQQYL.__AC_SY200_.jpg"
        />
        <Product
          id="2"
          title="LEGO® - Technic Chevrolet Corvette Zr1 (42093)"
          price={279.62}
          rating={2}
          image="https://images-eu.ssl-images-amazon.com/images/I/61BOKCgM9vL._AC_SY200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="Samsung Galaxy A71 SM-A715F Akıllı Telefon, 128GB, Prizma Gümüş(Samsung Türkiye Garantili)"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41cfh16OqvL.__AC_SY200_.jpg"
        />
        <Product
          id="4"
          title="Ay’ı Kim Çaldı (Türkçe) Kağıt Kapak – Tıpkı basım, 5 Ocak 2012"
          price={11.96}
          rating={3}
          image="https://images-eu.ssl-images-amazon.com/images/I/51ZSdd2rwrL._AC_SY200_.jpg"
        />
        <Product
          id="5"
          title="Tisort"
          price={11.96}
          rating={5}
          image="https://cdn.dsmcdn.com/assets/product/media/images/20200211/11/2941243/63294628/1/1_org_zoom.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="Under Armour UA W Charged Pursuit 2-PNK Spor Ayakkabılar Kadın"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61l7jE9c5BL._AC_SY500_.jpg"
        />
      </div>

    </div>
  )
}

export default Home
