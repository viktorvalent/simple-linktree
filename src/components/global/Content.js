const dataLink = [
  {
    id: 1,
    name: "Facebook",
    url: "https://facebook.com/valent.khoi",
  },
  {
    id: 2,
    name: "Instagram",
    url: "https://instagram.com/viktorvalent_",
  },
  {
    id: 3,
    name: "LinkedIn",
    url: "https://linkedin.com/in/viktorvalents",
  },
  {
    id: 4,
    name: "GitHub",
    url: "https://github.com/viktorvalent",
  },
  {
    id: 5,
    name: "YouTube",
    url: "https://youtube.com",
  },
];

export default function Content() {
  return (
    <main className="container">
      <ul className="btn-group">
        {dataLink.map((value) => (
          <li
            onClick={() => window.open(value.url, "_blank")}
            className="btn-link"
            key={value.id}
          >
            {value.name}
          </li>
        ))}
      </ul>
    </main>
  );
}
