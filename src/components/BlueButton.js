import { Button } from "./Button";

export function BlueButton(props) {
  return (
    <div>
      <Button handleClick={props.handleClick} buttonTitle={'blue'}/>
    </div>
  );
}
