import './Specials.css'

function Specials(props) {
    return (
        <div>
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
                        
                    </div>
                )}
            </div>
        </div>
    );
}

export default Specials;