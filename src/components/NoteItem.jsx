const NoteItem =(props)=>{
    return(

        <div className="note-item">
                <h4 className="note-quote">{props.noteq}</h4>
                <h2 className="note-head">{props.noteh}</h2>
                <p className="note-core">{props.notec}</p>
                </div>
    );
}
export default NoteItem;