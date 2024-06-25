const Section = (props) => {
    return (
        <section id={props.ident}>
            <h3>{props.titulo}</h3>
            <p>{props.parrafo}</p>
        </section>
            
        
    );
};

export default Section;