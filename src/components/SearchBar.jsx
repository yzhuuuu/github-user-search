import { FaMagnifyingGlass } from "react-icons/fa6";

function SearchBar() {
  return (
    <div className={"flex items-center space-x-2 place-self-center"}>
      <input
        className={
          "bg-base-300 text-primary focus:outline-none focus:ring focus:ring-2 rounded-2xl p-2 w-[15rem] placeholder:text-info"
        }
        type="text"
        placeholder={"please enter user name "}
      />
      <div>
        <FaMagnifyingGlass
          className={
            "justify-self-end text-accent cursor-pointer hover:text-primary transition-colors"
          }
        />
      </div>
    </div>
  );
}

export default SearchBar;
