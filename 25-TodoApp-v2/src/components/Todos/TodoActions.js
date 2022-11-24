import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button";

function TodoActions() {
  return (
    <>
      <Button title="reset todos">
        <RiRefreshLine />
      </Button>
      <Button title="clear complited todos">
        <RiDeleteBin2Line />
      </Button>
    </>
  );
}
export default TodoActions;
