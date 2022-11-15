import { React } from "react";
import Input from "shared/Input/Input";

function ChoosePage() {
  const gg = (e) => {
    if (e.keyCode === 13) console.log("ENTER!!!");
  };
  return (
    <>
      Номер страницы
      <Input onKeyDown={gg} placeholder="Введите номер" />
    </>
  );
}

export default ChoosePage;
