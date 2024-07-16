import Section from "../components/Section";

const Main = () => {
    return (
        <main>
            <Section
                ident="inicio"
                titulo="Inicio"
                parrafo="Lorem 12340000 ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit atque doloribus alias numquam enim rem ipsa ex nulla, molestias iure magni expedita magnam libero provident sapiente est nesciunt laborum deserunt?"
            />
            <Section
                ident="caracteristicas"
                titulo="Caracteristicas"
                parrafo="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit atque doloribus alias numquam enim rem ipsa ex nulla, molestias iure magni expedita magnam libero provident sapiente est nesciunt laborum deserunt?"
            />
            <Section
                ident="contacto"
                titulo="Contacto"
                parrafo="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit atque doloribus alias numquam enim rem ipsa ex nulla, molestias iure magni expedita magnam libero provident sapiente est nesciunt laborum deserunt?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit atque doloribus alias numquam enim rem ipsa ex nulla, molestias iure magni expedita magnam libero provident sapiente est nesciunt laborum deserunt?"
            />
        </main>
    );
};

export default Main;
