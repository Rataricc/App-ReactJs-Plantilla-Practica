import Testimonio from "./Testimonio"

function Descripcion(props) {
    return (
        <div className="descripcion-div">
            <Testimonio
                nombre="Pc Armada Gamer Amd Ryzen 3 4350g 8gb Ssd 240 Radeon Rx Vega"
                precio="$ 53.999"
                cuotas="en 12X $7.657,51"
                info="Pc Armada Gamer Amd Ryzen 3 4350g 8gb Ssd 240 Radeon Rx Vega
                    INCLUYE:
                    *Gabinete + Teclado + Mouse + Parlantes Fuente 500w
                    *Microprocesador AMD Ryzen 3 4350G
                    *Mother Gigabyte A320M-S2H Socket AM4
                    *Memoria Ddr4 8 Gb 2666 Mhz
                    *Disco Solido Ssd 240 Gb Sata Patriot Burst"
                img="app_react">
            </Testimonio>
            <Testimonio
                nombre="Teclado gamer Otemu Red color blanco con luz RGB"
                precio="$ 6.799"
                cuotas="en 12X $954,15"
                info="Ergonómico y apto para diversos usos - Resiste a salpicaduras - Función antighosting incorporada -
                    tipo de teclado: mecánico - Tecla cilíndrica - Con conector USB - Medidas: 37.5cm de ancho, 15.5cm
                    de alto y 4.3cm de profundidad - Indispensable para tus actividades - Las imágenes pueden ser ilustrativas."
                img="app_react2">
            </Testimonio>
            <Testimonio
                nombre="Monitor gamer Asus TUF Gaiming VG27AQ led 27 negro 100V/240V"
                precio="$ 110.549,77"
                cuotas="en 12X $15.676,77"
                info="Pantalla led de 27 - Tiene una resolución de 2560px-1440px - Relación de aspecto de 16:9 - Panel IPS - 
                    Su brillo es de 350cd/m2 - Tipos de conexión: DisplayPort 1.2, 2 HDMI 2.0, jack 3.5 mm - Altavoces incluidos - 
                    Es giratorio y reclinabe."
                img="app_react3">
            </Testimonio>
        </div>
    );
}
export default Descripcion