import { Button } from "antd";

interface PropButton {
  backgroundColor?: string | "rgb(220 38 38)";
  text: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export default function PrimaryButton(props: PropButton) {
  return (
    <Button
      onClick={props.onClick}
      type="primary"
      size="large"
      style={{
        backgroundColor: `${props.backgroundColor}`,
        borderColor: `${props.backgroundColor}`,
        borderRadius: 4,
      }}
    >
      <p className="font-bold text-center">{props.text}</p>
    </Button>
  );
}
