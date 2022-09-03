import { Link } from "react-router-dom";

import { Title } from "../../Assets/Styles/Para";

export default function Home() {
  return (
    <section>
      <Title>Hello, my name is Axel Lopez, a Front End Developer</Title>
      <button>
        <Link to="about">Know more {">"}</Link>
      </button>
    </section>
  );
}
