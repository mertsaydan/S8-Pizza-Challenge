import './Footer.css';
export default function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="contact">
          <div className="footer-logo">
            <img src="/footer/logo-footer.svg" />
          </div>
          <div className="address">
            <div className="location">
              <img src="/footer/icons/icon-1.png" />
              <h6>341 Londonderry Road,<br /> İstanbul Türkiye</h6>
            </div>
            <div className="mail">
              <img src="/footer/icons/icon-2.png" />
              <h6>aciktim@teknolojikyemekler.com</h6>
            </div>
            <div className="phone">
              <img src="/footer/icons/icon-3.png" />
              <h6>+90 216 123 45 67</h6>
            </div>
          </div>
        </div>
        <div className="hot-menu">
          <div className="hot-menu-title">
            <h5>Hot Menu</h5>
          </div>
          <div className="hot-menu-items">
            <a href="#">Terminal Pizza</a>
            <a href="#">5 Kişilik Hackathlon Pizza</a>
            <a href="#">useEffect Tavuklu Pizza</a>
            <a href="#">Beyaz Console Frosty</a>
            <a href="#">Testler Geçti Mutlu Burger</a>
            <a href="#">Position Absolute Acı Burger</a>
          </div>
        </div>
        <div className="instagram">
          <h5>Instagram</h5>
          <div className="insta-pictures">
            <img src="/footer/insta/li-0.png" />
            <img src="/footer/insta/li-1.png" />
            <img src="/footer/insta/li-2.png" />
            <img src="/footer/insta/li-3.png" />
            <img src="/footer/insta/li-4.png" />
            <img src="/footer/insta/li-5.png" />
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <h6>© 2023 Teknolojik Yemekler.</h6>
        <i className="fa-brands fa-twitter"></i>
      </div>
    </footer>
  )
}