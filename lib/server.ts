import app from "./config/app";
import { Config } from './config/constantes';


app.listen(Config.Port, () => {
   console.log(`Ejecutando Servicio en el puerto:${Config.Port}`);
})