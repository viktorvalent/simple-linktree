export default function Header(props) {
  const { avatar, name, bio } = props;
  return (
    <header>
      <img src={avatar} width={125} alt="" style={{ borderRadius: "50%" }} />
      <p>
        <span style={{ fontWeight: "bold", fontSize: "2rem" }}>{name}</span>{" "}
        <br />
        <br />
        <span style={{ fontWeight: "normal", fontSize: "1.25rem" }}>{bio}</span>
      </p>
    </header>
  );
}
