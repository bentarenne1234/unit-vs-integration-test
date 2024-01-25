export function Button(props) {
  return (
    <div>
      <button onClick={props.handleClick}> Click me {props.buttonText}! </button>
    </div>
  );
}
