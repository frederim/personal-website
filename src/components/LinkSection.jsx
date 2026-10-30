export default function LinkSection({ title, links }) {
  return (
    <section>
      <p className="subheader">
        <br />
        {title}
        <br />
      </p>
      <ul>
        {links.map(({ label, href }) => (
          <li key={href}>
            <a href={href} target="_blank" rel="noreferrer">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
