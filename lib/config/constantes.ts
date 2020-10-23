//TODO Exportacion de constantes globales
interface ConfigServer {
  Port: String;
}
export var Config: ConfigServer = {
  Port: process.env.PORT,
};
