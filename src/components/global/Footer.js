export default function Footer(props) {
  const { name } = props;
  return (
    <footer style={{}}>
      Copyright {new Date().getFullYear()} @ {name}
    </footer>
  );
}
