// Label that rolls up to a duplicate of itself on hover of a `.roll-host`
const RollText = ({ text }: { text: string }) => (
  <span className="roll">
    <span className="roll-in">
      <span>{text}</span>
      <span aria-hidden="true">{text}</span>
    </span>
  </span>
);

export default RollText;
