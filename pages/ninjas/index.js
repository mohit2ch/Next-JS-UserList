import Link from "next/link";
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
}

export default function Ninja({ ninjas }) {
  return (
    <div>
      <ul>
        {ninjas.map((ninja) => (
          <Link href={'/ninjas/' + ninja.id}><div className="single" key={ninja.id}>
            {ninja.name}
          </div></Link>
        ))}
      </ul>
    </div>
  );
}
