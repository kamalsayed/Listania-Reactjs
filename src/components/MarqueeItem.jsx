const MarqueeItem = (props)=>{
    return (
        <span> 
                    <img src={props.img} alt={props.alt} className="small-images-marq"/>
                    <p className="marq-h1">{props.h1}</p>
                    <p className="marq-h2">{props.h2}</p>
                    </span> 
    );


}
export default MarqueeItem;