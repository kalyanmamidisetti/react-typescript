type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};
export const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <h1>
          Hello {props.name}! You have {props.messageCount} unread messages!
        </h1>
      ) : (
        <h1>Please login</h1>
      )}
    </div>
  );
};
