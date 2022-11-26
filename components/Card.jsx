import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai"

const MenuCard = ({ title, icon, desc, link }) => {
    return (
        <div className="card lg:w-80 md:w-72 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{desc}</p>
                <div className="card-actions justify-end">
                    <Link href={link}>
                        <button className="btn btn-primary btn-circle">
                            <AiOutlineArrowRight />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default MenuCard;