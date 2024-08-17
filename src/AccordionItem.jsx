function AccordionItem({ num, title, curOpen, onCurOpen, children }) {
  const isOpen = curOpen === num;
  function handleClick() {
    onCurOpen(isOpen ? null : num);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleClick}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <p className="content-box">{children}</p>}
    </div>
  );
}

export default AccordionItem;
