import { Link } from "react-router-dom";
import { useState } from "react";
import { HomeIcon, BriefcaseIcon, LightBulbIcon, PhoneIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    const menu = [{
        title: 'Principal',
        icon: HomeIcon,
        link: '/'
    }, {
        title: 'Extensão',
        icon: LightBulbIcon,
        link: '/extension'
    }, {
        title: 'Trabalhos',
        icon: BriefcaseIcon,
        link: '/works'
    }, {
        title: 'Sobre nós',
        icon: InformationCircleIcon,
        link: '/about'
    }, {
        title: 'Contato',
        icon: PhoneIcon,
        link: '/contact'
    }];

    return (
        <aside className={`${open ? 'w-[25%]' : 'w-[10%]'} duration-300 bg-primary text-dark font-bold`}>
            <div className="flex items-center justify-center h-16 text-xl my-8">
                <img src="/image.png" className="h-[100%] cursor-pointer" onClick={() => setOpen(!open)} />
            </div>
            <ul className="space-y-4">
                {menu.map((item, index) => (
                    <li key={index} className="hover:bg-gray-400 flex justify-center items-center relative group">
                        <Link to={item.link} className="block p-4 flex justify-evenly items-center w-full" alt={item.title}>
                            <item.icon className="h-6 w-6 inline" />
                            <span className={`transition-all duration-300 ${open ? 'scale-100' : 'scale-0 absolute'}`}>{item.title}</span>
                        </Link>

                        {!open && (
                            <div key={index} 
                            className="absolute left-full rounded-md px-2 py-1 ml-6 bg-secondary text-white text-sm invisible opacity-20 -translate-x-3 transition-all
                            whitespace-nowrap group-hover:visible group-hover:opacity-70 group-hover:translate-x-0">
                                {item.title}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
