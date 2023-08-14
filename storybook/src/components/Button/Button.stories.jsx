import Button from "./Button";

export default {
  title: "components/Button", //Titulo del nombre de la historia
  component: Button, //Despues especificar que tipo de componente queremos mostrar
  args: {
    children: "Button", //La prop hijo va mostrar boton
  },
};

//Luego hacer un Template y este recibe argumentos, devolviendo el componente con las props
const Template = (args) => <Button {...args} />;

//Aqui declaramos las historias
export const Primary = Template.bind({});

export const Secondary = Template.bind({});
//Los valores que diferencia una historia de otra
Secondary.args = {
  type: "secondary",
};

export const Third = Template.bind({});
//Los valores que diferencia una historia de otra
Third.args = {
  type: "third",
};

