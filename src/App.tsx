import { useState } from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

function App() {
  const [mensajes, setMensajes] = useState<string[]>([
    "Feliz cumpleaños 🥰 🎂, TE AMAMOS NUNI !!! ❤️",
    "Mamá, tu amor es el refugio más seguro que tengo. Gracias por ser mi apoyo incondicional.",
    "Eres la razón por la que creo en la bondad del mundo. Te amo más de lo que las palabras pueden expresar.",
    "Cada día contigo es un regalo. Gracias por ser la mejor mamá del universo.",
    "Tu sonrisa ilumina mis días y tu sabiduría guía mis pasos. Eres una inspiración para mí.",
    "Mamá, tu amor y sacrificio no pasan desapercibidos. Te valoro más de lo que puedes imaginar.",
    "Eres la mujer más fuerte que conozco. Gracias por enseñarme a ser valiente y resiliente.",
  ]);

  const fechaActual = new Date().toLocaleDateString();

  // Retornar un mensaje diferente dependiendo del dia de la semana
  const message = (function () {
    const dia = new Date().getDay();
    if (new Date().getMonth() === 8 && new Date().getDate() === 28) {
      return "Feliz cumpleaños 🥰 🎂, TE AMAMOS NUNI !!! ❤️";
    }
    switch (dia) {
      case 0:
        return mensajes[0];
      case 1:
        return mensajes[1];
      case 2:
        return mensajes[2];
      case 3:
        return mensajes[3];
      case 4:
        return mensajes[4];
      case 5:
        return mensajes[5];
      case 6:
        return mensajes[6];
      default:
        return "Error";
    }
  })();

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <div className="w-full flex flex-col items-center">
              <p className="text-md">{fechaActual}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{message}</p>
          </CardBody>
          <Divider />
        </Card>
      </div>
    </>
  );
}

export default App;
