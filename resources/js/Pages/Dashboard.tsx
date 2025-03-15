import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import DashboardSideBar from './Sidebar';
import MaepletLogo from './components/Logo';
import DashboardNavItem from './components/DashboardNavItem';

import {

    FaMoneyBill,
    FaHome,
    FaInfo

} from 'react-icons/fa';
import { FcWorkflow } from 'react-icons/fc';
import { TbDeviceHeartMonitor } from 'react-icons/tb';
import { GiSecretBook } from 'react-icons/gi';
import { act, useEffect, useState } from 'react';
import DashboardHome from './dashboardpages/home';
import DashboardBilling from './dashboardpages/billing';
import DashboardWorkflows from './dashboardpages/workflows';
import DashboardProjects from './dashboardpages/projects';

export default function Dashboard() {

    const [active, setActive] = useState('dashboard.home')

    useEffect(()=>{
        //get the page url
        const url = window.location.pathname
        switch(url){
            case '/dashboard/home':
                setActive('dashboard.home')
                break;
            case '/dashboard/intro':
                setActive('dashboard.intro')
                break;
            case '/dashboard/workflow':
                setActive('dashboard.workflow')
                break;
            case '/dashboard/monitor':
                setActive('dashboard.monitor')
                break;
            case '/dashboard/credentials':
                setActive('dashboard.credentials')
                break;
            case '/dashboard/billing':
                setActive('dashboard.billing')
                break;
            case '/dashboard/projects':
                setActive('dashboard.projects')
                break;
        }
    },[])

    const handleNavItemClick = (id: string) => {
        // setActive(id)

        //fetch the url

        router.visit(route(id));


    }

    return (
        <AuthenticatedLayout
        >
            <Head title="Dashboard" />
            <div className="h-screen bg-red-400 flex">
    <div className="bg-black w-80 flex-shrink-0">

            <div>
                <MaepletLogo />
            </div>

            <div>
            <DashboardNavItem url={"home"} icon={<FaHome/>} id={"dashboard.home"} onClickNavItem={handleNavItemClick}  isActive={active === "dashboard.home"}>
                 Home
            </DashboardNavItem>
            </div>

            <div>
            <DashboardNavItem url={"intro"} icon={<FaInfo/>} id={"dashboard.intro"} onClickNavItem={handleNavItemClick}    isActive={active === "dashboard.intro"}>
                Introduction
            </DashboardNavItem>
            </div>

            <div>
            <DashboardNavItem url={"projects"} icon={<FcWorkflow/>} id={"dashboard.projects"} onClickNavItem={handleNavItemClick}    isActive={active === "dashboard.projects"}>
                Projects
            </DashboardNavItem>
            </div>
            
            <div>
            <DashboardNavItem url={"workflow"} icon={<FcWorkflow/>} id={"dashboard.workflow"} onClickNavItem={handleNavItemClick}   isActive={active === "dashboard.workflow"}>
                Workflows
            </DashboardNavItem>
            </div>

          

            <div>
            <DashboardNavItem url={"monitor"} icon={<TbDeviceHeartMonitor/>} id={"dashboard.monitor"} onClickNavItem={handleNavItemClick}    isActive={active === "dashboard.monitor"}>
                Monitor
            </DashboardNavItem>
            </div>

            <div>
            <DashboardNavItem url={"credentials"} icon={<GiSecretBook/>} id={"dashboard.credentials"} onClickNavItem={handleNavItemClick}    isActive={active === "dashboard.credentials"}>
                Credentials
            </DashboardNavItem>
            </div>

            <div>
            <DashboardNavItem url={"billing"} icon={<FaMoneyBill/>} id={"dashboard.billing"} onClickNavItem={handleNavItemClick}    isActive={active === "dashboard.billing"}>
                Billing
            </DashboardNavItem>
            </div>



    </div>
    <div className="flex-grow bg-white p-4 ">
        {active === "dashboard.home" && ( <DashboardHome />)}
        {active === "dashboard.intro" && ( <div>Introduction</div>)}
        {active === "dashboard.workflow" && ( <DashboardWorkflows />)}
        {active === "dashboard.monitor" && ( <div>Monitor</div>)}
        {active === "dashboard.credentials" && ( <div>Credentials</div>)}
        {active === "dashboard.billing" && ( <DashboardBilling />)}
        {active === "dashboard.projects" && ( <DashboardProjects />)}
    </div>



</div>

        </AuthenticatedLayout>
    );
}
