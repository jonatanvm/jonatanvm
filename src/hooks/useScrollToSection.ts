export const useScrollToSection = () => {
  const sections = ["details", "experience", "education"];
  function getActiveSection() {
    const activeSection =
      document.getElementsByClassName("active-section")?.[0];
    activeSection?.classList.remove("active-section");
    const sectionIndex = sections.findIndex(
      (section) => activeSection?.id === section,
    );
    return sectionIndex;
  }
  function scrollToSection(section: number) {
    const item = document.getElementById(sections[section]);
    item?.classList.add("active-section");
    item?.scrollIntoView({ behavior: "smooth" });
  }

  //TODO We need shared state for current item otherwise does not work

  const nextItem = () => {
    const currentItem = getActiveSection();
    if (currentItem === undefined || currentItem >= 2) {
      return;
    }
    scrollToSection(currentItem + 1);
  };

  const prevItem = () => {
    const currentItem = getActiveSection();
    if (currentItem === undefined || currentItem === 0) {
      return;
    }
    scrollToSection(currentItem - 1);
  };

  return { nextItem, prevItem };
};
