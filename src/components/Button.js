export function Button(props) {
  return (
    <div>
      <button onClick={props.handleClick}> Click me {props.buttonTitle}! </button>
    </div>
  );
}
