import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <h1>Hello, my name is Axel Lopez, a Front End Developer</h1>
      <button>
        <Link to="about">Know more {">"}</Link>
      </button>
    </section>
  );
}
