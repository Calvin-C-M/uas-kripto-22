import MENULIST from "../constants/MenuList";
import APP_TITLE from "../constants/AppTitle";
import MenuCard from "../components/Card";

export default function Home() {
  return (
    <>
      <div>
        <header className="mb-5">
          <h1 className="text-5xl">{APP_TITLE}</h1>
        </header>
        <div className="grid grid-flow-cols grid-cols-3 gap-6">
          { MENULIST.map(list => <MenuCard key={list.id} title={list.title} link={list.link} desc={list.description} />) }
        </div>
      </div>
    </>
  )
}
