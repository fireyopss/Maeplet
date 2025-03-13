import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
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

export default function Dashboard() {
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
            <DashboardNavItem icon={<FaHome/>} href="/dashboard"  isActive={true}>
                 Home
            </DashboardNavItem>
            </div>

            <div>
            <DashboardNavItem icon={<FaInfo/>}  href="/dashboard"  isActive={false}>
                Introduction
            </DashboardNavItem>
            </div>

            <div>
            <DashboardNavItem icon={<FcWorkflow/>}  href="/dashboard"  isActive={false}>
                Workflows
            </DashboardNavItem>
            </div>

            <div>
            <DashboardNavItem icon={<TbDeviceHeartMonitor/>}  href="/dashboard"  isActive={false}>
                Monitor
            </DashboardNavItem>
            </div>

            <div>
            <DashboardNavItem icon={<GiSecretBook/>}  href="/dashboard"  isActive={false}>
                Credentials
            </DashboardNavItem>
            </div>



    </div>
    <div className="flex-grow bg-white ">
        Home
    </div>



</div>

        </AuthenticatedLayout>
    );
}
