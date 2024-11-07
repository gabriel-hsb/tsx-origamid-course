import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const Content = () => {
  const context = useContext(GlobalContext);

  if (!context) return;

  const handleIncrement = () => {
    context.setCount((prev) => prev + 1);
  };

  const handleReset = () => {
    context.setCount(0);
  };

  if (context)
    return (
      <div>
        <h1>{context.count}</h1>
        <div className="flex">
          <button onClick={handleIncrement}>+1</button>
          <button onClick={handleReset}>reset</button>
        </div>
      </div>
    );
};

export default Content;
