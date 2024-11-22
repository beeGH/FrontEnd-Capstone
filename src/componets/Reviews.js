import './Reviews.css'


function Reviews(props) {
    return (
        <div className='rv_container'>
            <h1 className="rv_head">Testimonials</h1>
            <div className="rv_list">
                {props.reviews.map(s =>
                    <div key={s.id} className="rv_item">
                        <p className="rv_rating">{s.rating}</p>
                        <img className="rv_img"
                            src={s.image}
                            alt={s.name}                            
                        />
                        <p className="rv_name">{s.name}</p>
                        <p className="rv_desc">{s.review}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Reviews;