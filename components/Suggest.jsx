import "./Suggest.css";
export default function Suggest({ handleClick }) {
  return (
    <>
      <section className="suggest">
        <div className="left-bar">
          <h2>Özel<br /> Lezzetus</h2>
          <p>Position: Absolute Acı Burger</p>
          <a className="suggest-links" href="#" onClick={handleClick}>SİPARİŞ VER</a>
        </div>
        <div className="right-bar">
          <div className="rb-row1">
            <h2>Hackathlon<br /> Burger Menü</h2>
            <a className="suggest-links" href="#" onClick={handleClick}>SİPARİŞ VER</a>
          </div>
          <div className="rb-row2">
            <h2><span>Çoooook</span> hızlı<br /> npm gibi kurye</h2>
            <a className="suggest-links" href="#" onClick={handleClick}>SİPARİŞ VER</a>
          </div>
        </div>
      </section>
      <section className="second-banner">
        <p>en çok paketlenen ürünler</p>
        <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
      </section>
    </>
  )
}
