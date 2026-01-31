"use client";

import { useParams, usePathname } from "next/navigation";
import {
        GraduationCap,
        Users,
        BookOpen,
        Calendar,
        LayoutDashboard,
        Settings,
        UserCheck,
        CreditCard,
        MessageSquare,
        Bell,
        Menu,
        X,
        LogOut,
        User,
        Moon,
        Sun,
        MapPin
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/providers/theme-provider";

interface SidebarProps {
        centerSlug: string;
        branchSlug: string;
        pathname: string;
}

const SidebarContent = ({ centerSlug, branchSlug, pathname }: SidebarProps) => {
        const { theme, toggleTheme } = useTheme();
        const navItems = [
                { label: "Tổng quan", href: `/app/${centerSlug}/dashboard/${branchSlug}`, icon: LayoutDashboard },
                { label: "Khóa học", href: `/app/${centerSlug}/dashboard/${branchSlug}/courses`, icon: BookOpen },
                { label: "Lớp học", href: `/app/${centerSlug}/dashboard/${branchSlug}/classes`, icon: Users },
                { label: "Học sinh", href: `/app/${centerSlug}/dashboard/${branchSlug}/students`, icon: GraduationCap },
                { label: "Lịch học/dạy", href: `/app/${centerSlug}/dashboard/${branchSlug}/schedule`, icon: Calendar },
                { label: "Học phí", href: `/app/${centerSlug}/dashboard/${branchSlug}/tuition`, icon: CreditCard },
                { label: "Tin nhắn", href: `/app/${centerSlug}/dashboard/${branchSlug}/messaging`, icon: MessageSquare },
        ];

        const isActive = (path: string) => pathname === path;

        return (
                <div className="flex flex-col h-full">
                        <div className="p-6">
                                {/* Logo */}
                                <Link href="/" className="flex items-center gap-2 mb-6">
                                        <div className="bg-primary p-1.5 rounded-lg shadow-lg shadow-primary/30">
                                                <GraduationCap className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="text-xl font-bold font-heading text-white">
                                                Edu<span className="text-primary">Scale</span>
                                        </span>
                                </Link>

                                {/* Branch Info - Moved to Top */}
                                <div className="mb-8 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                                        <div className="flex items-start gap-3">
                                                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                                        <MapPin className="w-5 h-5 text-primary" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                        <p className="text-[10px] text-white/60 mb-1 uppercase font-bold tracking-wider">Chi nhánh hiện tại</p>
                                                        <p className="text-sm font-bold capitalize text-white line-clamp-1">{branchSlug.replace(/-/g, ' ')}</p>
                                                </div>
                                        </div>
                                </div>

                                <nav className="space-y-1.5">
                                        <div className="pb-2 text-[10px] font-bold uppercase tracking-widest text-white/40 px-3">Hệ thống</div>
                                        <Link
                                                href={`/app/${centerSlug}/dashboard`}
                                                className="flex items-center gap-3 p-3 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all text-sm font-medium"
                                        >
                                                <LayoutDashboard className="w-4 h-4" />
                                                Quay lại danh sách cơ sở
                                        </Link>

                                        <div className="pt-6 pb-2 text-[10px] font-bold uppercase tracking-widest text-white/40 px-3">Quản lý cơ sở</div>
                                        {navItems.map((item) => (
                                                <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        className={`flex items-center gap-3 p-3 rounded-xl transition-all text-sm font-medium ${isActive(item.href)
                                                                ? "bg-primary text-white shadow-lg shadow-primary/30"
                                                                : "text-white/70 hover:text-white hover:bg-white/10"
                                                                }`}
                                                >
                                                        <item.icon className="w-4 h-4" />
                                                        {item.label}
                                                </Link>
                                        ))}

                                        <div className="pt-6 pb-2 text-[10px] font-bold uppercase tracking-widest text-white/40 px-3">Thiết lập</div>
                                        <Link href="#" className="flex items-center gap-3 p-3 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all text-sm font-medium">
                                                <Settings className="w-4 h-4" />
                                                Cài đặt cơ sở
                                        </Link>
                                </nav>
                        </div>

                        {/* Dark Mode Toggle */}
                        <div className="mt-auto p-6 border-t border-white/10">
                                <button
                                        onClick={toggleTheme}
                                        className="w-full flex items-center gap-3 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all text-white group"
                                >
                                        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                                                {theme === 'dark' ? <Sun className="w-5 h-5 text-primary" /> : <Moon className="w-5 h-5 text-primary" />}
                                        </div>
                                        <div className="flex-1 text-left">
                                                <p className="text-sm font-bold">{theme === 'dark' ? 'Chế độ sáng' : 'Chế độ tối'}</p>
                                                <p className="text-[10px] text-white/60">Thay đổi giao diện</p>
                                        </div>
                                </button>
                        </div>
                </div>
        );
};

export default function BranchLayout({ children }: { children: React.ReactNode }) {
        const params = useParams();
        const pathname = usePathname();
        const centerSlug = params["center"] as string;
        const branchSlug = params["branch"] as string;
        const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
        const [isProfileOpen, setIsProfileOpen] = useState(false);
        const router = useRouter();

        return (
                <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex">
                        {/* Desktop Sidebar */}
                        <aside className="w-72 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white hidden lg:flex flex-col sticky top-0 h-screen shrink-0 shadow-2xl">
                                <SidebarContent centerSlug={centerSlug} branchSlug={branchSlug} pathname={pathname} />
                        </aside>

                        {/* Mobile Sidebar Overlay */}
                        <AnimatePresence>
                                {isMobileMenuOpen && (
                                        <>
                                                <motion.div
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden"
                                                />
                                                <motion.aside
                                                        initial={{ x: "-100%" }}
                                                        animate={{ x: 0 }}
                                                        exit={{ x: "-100%" }}
                                                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                                        className="fixed left-0 top-0 bottom-0 w-72 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white z-50 lg:hidden overflow-y-auto shadow-2xl"
                                                >
                                                        <div className="absolute top-6 right-6">
                                                                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-400 hover:text-white transition-colors">
                                                                        <X className="w-6 h-6" />
                                                                </button>
                                                        </div>
                                                        <SidebarContent centerSlug={centerSlug} branchSlug={branchSlug} pathname={pathname} />
                                                </motion.aside>
                                        </>
                                )}
                        </AnimatePresence>

                        {/* Main Content Area */}
                        <div className="flex-1 flex flex-col min-w-0">
                                {/* Header */}
                                <header className="h-16 lg:h-20 bg-white dark:bg-slate-900 border-b dark:border-slate-800 sticky top-0 z-30 px-4 lg:px-8 flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                                <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">
                                                        <Menu className="w-6 h-6" />
                                                </button>
                                                <div>
                                                        <h1 className="text-sm lg:text-lg font-bold flex items-center gap-2 capitalize leading-tight dark:text-white">
                                                                <span className="hidden md:inline">Dashboard:</span> {branchSlug.replace(/-/g, ' ')}
                                                        </h1>
                                                        <p className="text-[10px] lg:text-xs text-secondary dark:text-slate-400 italic">Hệ thống của {centerSlug.toUpperCase()}</p>
                                                </div>
                                        </div>

                                        <div className="flex items-center gap-3 lg:gap-6">
                                                <button className="p-2 text-secondary hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full relative transition-colors">
                                                        <Bell className="w-5 h-5" />
                                                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                                                </button>
                                                <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>

                                                <div className="relative">
                                                        <div
                                                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                                                className="flex items-center gap-3 cursor-pointer group"
                                                        >
                                                                <div className="text-right hidden sm:block">
                                                                        <p className="text-xs font-bold group-hover:text-primary transition-colors dark:text-white">Quản trị cơ sở</p>
                                                                        <p className="text-[10px] text-slate-400 font-medium">ID: #B_2910</p>
                                                                </div>
                                                                <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700 group-hover:border-primary transition-all overflow-hidden">
                                                                        <UserCheck className="w-5 h-5 text-slate-500 dark:text-slate-400 group-hover:text-primary" />
                                                                </div>
                                                        </div>

                                                        <AnimatePresence>
                                                                {isProfileOpen && (
                                                                        <>
                                                                                <div
                                                                                        className="fixed inset-0 z-10"
                                                                                        onClick={() => setIsProfileOpen(false)}
                                                                                />
                                                                                <motion.div
                                                                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                                                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                                                        className="absolute right-0 mt-3 w-64 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700 p-2 z-20"
                                                                                >
                                                                                        <div className="p-4 border-b border-slate-50 dark:border-slate-700 mb-2">
                                                                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Tài khoản quản trị</p>
                                                                                                <p className="text-sm font-bold text-slate-900 dark:text-white">admin@eduscale.com</p>
                                                                                        </div>
                                                                                        <div className="space-y-1">
                                                                                                <button
                                                                                                        onClick={() => router.push(`/app/${centerSlug}/profile`)}
                                                                                                        className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-primary transition-all text-sm font-bold"
                                                                                                >
                                                                                                        <User className="w-4 h-4" />
                                                                                                        Hồ sơ cá nhân
                                                                                                </button>
                                                                                                <button
                                                                                                        onClick={() => router.push(`/app/${centerSlug}/settings`)}
                                                                                                        className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-primary transition-all text-sm font-bold"
                                                                                                >
                                                                                                        <Settings className="w-4 h-4" />
                                                                                                        Cài đặt hệ thống
                                                                                                </button>
                                                                                                <div className="h-px bg-slate-50 dark:bg-slate-700 mx-2 my-1" />
                                                                                                <button
                                                                                                        onClick={() => window.location.href = '/login'}
                                                                                                        className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500 transition-all text-sm font-bold"
                                                                                                >
                                                                                                        <LogOut className="w-4 h-4" />
                                                                                                        Đăng xuất
                                                                                                </button>
                                                                                        </div>
                                                                                </motion.div>
                                                                        </>
                                                                )}
                                                        </AnimatePresence>
                                                </div>
                                        </div>
                                </header>

                                {/* Dynamic Page Content */}
                                <main className="flex-1 bg-slate-50 dark:bg-slate-950">
                                        {children}
                                </main>
                        </div>
                </div>
        );
}
