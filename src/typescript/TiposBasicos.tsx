export const TiposBasicos = () => {
  /* let nombre: string | number = "Fernando";
  nombre = 123; */

  const nombre: string = "Fernando";
  const edad: number = 35;
  const estaActivo: boolean = true;

  const poderes: string[] = ["Velocidad", "Volar", "Respirar en el agua"];

  return (
    <>
      <h3>Tipos Basicos</h3>
      {nombre}, {edad}, {estaActivo ? "Activo" : "Inactivo"}
      <br />
      {poderes.join(", ")}
    </>
  );
};
