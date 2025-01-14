export default function Card({ href, imgAlt, imgSrc, children }) {
  return (
    <div className="w-[400px] bg-white rounded">
      <a className="block border rounded shadow-lg" href={href}>
        <img className="" src={imgSrc} alt={imgAlt} />
        <div className="">{children}</div>
      </a>

    </div>
  );
}
