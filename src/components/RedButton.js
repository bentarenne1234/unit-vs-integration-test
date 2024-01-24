import { Button } from "./Button";

export function RedButton(props) {
  return (
    <div>
      <Button handleClick={props.handleClick} buttonTitle={'red'}/>
    </div>
  );
}
