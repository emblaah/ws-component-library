export default function Card({ href, imgAlt, imgSrc, children }) {
  return (
    <div className="w-[400px] bg-white rounded">
      <a className="block border rounded shadow-lg" href={href}>
        <img className="p-3" src={imgSrc} alt={imgAlt} />
        <div className="px-3 py-1">{children}</div>
      </a>
    </div>
  );
}
