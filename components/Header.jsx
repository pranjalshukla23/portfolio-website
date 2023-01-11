export const Header = () => {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element && id !== "intro") {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({
        block: "start",
      });
    } else if (element && id === "intro") {
      console.log("intro");
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({
        block: "center",
      });
    }
  };
  return (
    <header className="flex flex-col md:flex-row justify-start items-center gap-x-48 bg-black p-4 sticky top-0 z-40">
      <h1 className="font-RobotoCondensed text-4xl text-blue-300">
        PranjalShukla.<span className="text-violet-600">_</span>
      </h1>
      <ul className="flex flex-col md:flex-row justify-between items-center gap-2 text-white text-lg font-Montserrat font-bold w-1/2">
        <li>
          <button onClick={() => handleClickScroll("intro")}>Home</button>
        </li>
        <li>
          <button onClick={() => handleClickScroll("expertise")}>
            Expertise
          </button>
        </li>
        <li>
          <button onClick={() => handleClickScroll("work")}>Work</button>
        </li>
        <li>
          <button onClick={() => handleClickScroll("experience")}>
            Experience
          </button>
        </li>
        <li>
          <button onClick={() => handleClickScroll("contact")}>Contact</button>
        </li>
      </ul>
    </header>
  );
};