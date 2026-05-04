import { Link } from 'react-router-dom';
import './OrderForm.css';
import logo from '../images/iteration-1-images/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Input, FormGroup, Label} from 'reactstrap';

const extras = ["Pepperoni", "Tavuk Izgara", "Mısır", "Sarımsak", "Ananas", "Sosis", "Soğan", "Sucuk", "Biber", "Kabak", "Kanada Jambonu", "Domates", "Jalapeño", "Zeytin"]
export default function OrderForm() {
  return (
    <>
      <header className="order-form-header">
        <div className="order-form-header-inner">
            <img src={logo} alt="Logo" className="order-form-logo" />
          <div className="order-form-header-title">
            
            <p className="order-form-breadcrumb">
              <Link to="/" className="breadcrumb-link">Anasayfa</Link>
              <span>-</span>
              <Link to="/order-form" className="breadcrumb-link active">Sipariş Oluştur</Link>
            </p>
          </div>
        </div>
      </header>

      <main className="order-form-main">
        <section className="pizza-card">
          <div className="pizza-card-head">
            <div>
              <h2 className="pizza-card-title">Position Absolute Acı Pizza</h2>
              
            </div>
            <div className="pizza-card-rating">
              <p className="pizza-card-price">85.50 ₺</p>
              <span className="pizza-card-rating-value">4.9</span>
              <span className="pizza-card-rating-count">(200)</span>
            </div>
          </div>

          <p className="pizza-card-description">
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
          </p>
          <div className="pizza-card-form">
            <Form>
          <div className="pizza-card-form-top">
            <div>
                <legend className="pizza-card-form-size-legend">Boyut Seç <span>*</span></legend>
                <FormGroup check className="pizza-card-form-size" >
                    <Label check>
                      <Input type="radio" name="size" id="kucuk"/>{" "}
                      Küçük
                    </Label>
                </FormGroup>
                <FormGroup check className="pizza-card-form-size" >
                    <Label check>
                      <Input type="radio" name="size" id="orta"/>{" "}
                      Orta
                    </Label>
                </FormGroup>
                <FormGroup check className="pizza-card-form-size" >
                    <Label check>
                      <Input type="radio" name="size" id="buyuk"/> {" "}
                      Büyük
                    </Label>
                </FormGroup>
            </div>
            <div>
                <FormGroup className="pizza-card-form-dough">
                    <Label for="dough" className="pizza-card-form-dough-legend">Hamur Seç <span>*</span></Label>
                    <Input type="select" className="pizza-card-form-dough-select" name="dough" id="dough">
                        <option value="">Hamur Tipi Seçiniz</option>
                        <option value="ince">İnce</option>
                        <option value="kalin">Kalın</option>
                    </Input>
                </FormGroup>
            </div>
          </div>
          <div className="pizza-card-form-checkbox-header">
            <h3>Ek Malzemeler</h3>
            <p>En fazla 10 tane malzeme seçebilirsiniz. 5₺</p>
          </div> 
          <div className="pizza-card-form-checkboxes">
            {extras.map((extra, index) => (
              <FormGroup check key={index} className="pizza-card-form-checkbox">
                <Label check>
                  <Input type="checkbox" name="extra" id={`extra-${index}`} />{" "}
                  {extra}
                </Label>
              </FormGroup>
            ))}
          </div> 
          <div className="pizza-card-form-name">
            <FormGroup>
              <Label for="name" className="pizza-card-form-name-label">Adınız Soyadınız <span>*</span></Label>
              <Input type="text" name="name" id="name" placeholder="Adınızı ve Soyadınızı Giriniz" className="pizza-card-form-name-input"/>
            </FormGroup>
          </div>
          <div className="pizza-card-form-OrderNote">
            <FormGroup>
              <Label for="orderNote" className="pizza-card-form-OrderNote-label">Sipariş Notu</Label>
              <Input type="textarea" name="orderNote" id="orderNote" placeholder="Siparişinize eklemek istediğiniz bir not var mı?" className="pizza-card-form-OrderNote-input"/>
            </FormGroup>
          </div>
          </Form>
          </div>
          <div className="pizza-card-form-bottom">
          <div className="pizza-card-form-count">
            <button className="pizza-card-form-count-button">-</button>
            <span className="pizza-card-form-count-value">1</span>
            <button className="pizza-card-form-count-button">+</button>
          </div>
          <div className="pizza-card-form-total">
            <p className="pizza-card-form-total-label">Sipariş Toplamı</p>
            <p className="pizza-card-form-total-extra">Seçimler 25 ₺</p>      
            <p className="pizza-card-form-total-price">Toplam 85.50 ₺</p>
            <button className="pizza-card-form-submit-button">Siparişi Tamamla</button>
          </div>
          
          </div>
        </section>
      </main>
    </>
  )
}
