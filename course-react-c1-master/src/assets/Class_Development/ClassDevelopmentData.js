//Week 2 of Class
import PokemonApp from "../../PokemonApp";
import CardApp from "../../W2/S1/CardApp";
import ParentApp from "../../W2/S3/ParentApp";
//WEEK 3 OF CLASS (CLASS COMPONENTS)
import ParadigApp from "../../W3/S1/ParadigApp";
import ParentCount from "../../W3/S2/ParentCount.js";
import CounterMesa from "../../W3/S3/CounterMesa.js";
//WEEK 4 OF CLASS (LIFE CYCLES)
import LifeCycle from "../../W4/S1/LifeCycles";
import FunCycle from "../../W4/S1/FunCycle";

export const ClassData = {
  week_one: [
    { id: 1, class_name: "Bienvenido a React", component: "" },
    { id: 2, class_name: "Qué es React?", component: "" },
  ],
  week_two: [
    { id: 4, class_name: "Create React App", component: CardApp },
    { id: 5, class_name: "Pokemon Card", component: PokemonApp },
    { id: 6, class_name: "Twitter Login Project", component: ParentApp },
  ],
  week_three: [
    {
      id: 7,
      class_name: "Paradigmas de Estilo en React",
      component: ParadigApp,
    },
    { id: 8, class_name: "Stateful Class Components", component: ParentCount },
    { id: 9, class_name: "Clase de Repaso", component: CounterMesa },
  ],
  week_four: [
    { id: 10, class_name: "Life Cycle Methods Class", component: LifeCycle },
    { id: 11, class_name: "Life Cycle Methods Fn", component: FunCycle },
    { id: 12, class_name: "Stateful Class Components", component: "" },
    { id: 13, class_name: "Clase de Repaso", component: "" },
  ],
};
