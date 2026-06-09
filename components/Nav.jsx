import './Nav.css';
export default function Nav() {
  return (
    <section>
      <nav className="menu-bar">
        <div className="menu-items">
          <img src="/icons/1.svg" />
          <p>YENİ! Kore</p>
        </div>
        <div className="menu-items">
          <img src="/icons/2.svg" />
          <p>Pizza</p>
        </div>
        <div className="menu-items">
          <img src="/icons/3.svg" />
          <p>Burger</p>
        </div>
        <div className="menu-items">
          <img src="/icons/4.svg" />
          <p>Kızartmalar</p>
        </div>
        <div className="menu-items">
          <img src="/icons/5.svg" />
          <p>Fast Food</p>
        </div>
        <div className="menu-items">
          <img src="/icons/6.svg" />
          <p>Gazlı İçecek</p>
        </div>
      </nav>
    </section>
  )
}