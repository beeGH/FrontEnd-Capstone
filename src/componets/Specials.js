import './Specials.css'
import oo_img from '../images/delivery-icon.png'


function Specials(props) {
    return (
        <div className='sp_container'>
            <h1 className="sp_head">
                <p>This weeks specials!</p>
                <button>Order Online</button>
            </h1>
            <div className="sp_list">
                {props.specials.map(s =>
                    <div key={s.id} className="sp_item">
                        <img className="sp_img"
                            src={s.image}
                            alt={s.name}
                            width="262px"
                            height="175px"
                        />                        
                        <p className="sp_name">{s.name}</p>
                        <p className="sp_desc">{s.desc}</p>
                        <p className="sp_price">{s.price}</p>
                        <p className="sp_order_online">Order Online</p>
                        <img className="sp_oo_img"
                            src={oo_img}
                            alt={"deilivery"}
                            width="32px"
                            height="25px"
                        />
                        
                    </div>
                )}
            </div>
        </div>
    );
}

export default Specials;