import Button from "./components/Button";
import Text from "./components/Text";
import { ButtonType } from "./theme";
import { ButtonSize } from "./theme";

export default function App() {
  const sizes = {
    sm: "font-medium text-sm leading-normal",
    base: "font-medium text-base leading-normal",
    lg: "font-semibold text-lg md:text-2xl leading-relaxed",
  };

  const variants = {
    gray: "text-gray-600",
    white: "text-white",
    dark: "text-gray-900",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 h-screen">
      <div className="flex flex-col gap-3">
        <h1 className="font-medium text-xl">/theme</h1>
        <Button className={ButtonType.delete}>delete + normal</Button>
        <Button className={`${ButtonType.primary} ${ButtonSize.sm}`}>
          primary + sm
        </Button>
        <Button className={`${ButtonType.secondary} ${ButtonSize.lg}`}>
          secondary + lg
        </Button>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="font-medium text-xl">classes</h1>
        <button className="btn btn-primary btn-xs">Update Now</button>
        <button className="btn btn-secondary btn-xs">Later</button>
      </div>
      <div>
        <Text className={`${variants.gray} ${sizes.sm}`}>Hello World</Text>
        <Text className={`${variants.gray} ${sizes.base}`}>Hello World</Text>
        <Text className={`${variants.gray} ${sizes.lg}`}>Hello World</Text>
      </div>
    </div>
  );
}
