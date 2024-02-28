//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

const Card = ({ input1, input2 }) => {
  return (
    <div className="card border-dark mt-4 text-center ">
      <p className="m-2">Hola {input1}</p>
      <p className="m-2">sabemos que tu color favorito es: </p>
      <div className="card-body text-center" style={{ backgroundColor: input2 }}>
        <p className="m-2">{input2}</p>
        </div>
    </div>
  );
}

export default Card;
