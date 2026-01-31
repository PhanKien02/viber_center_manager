"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
        { name: "Tính năng", href: "#features" },
        { name: "Quy trình", href: "#process" },
        { name: "Bảng giá", href: "#pricing" },
        { name: "Hỏi đáp", href: "#faq" },
        { name: "Liên hệ", href: "#contact" },
];

export default function Navbar() {
        const [isScrolled, setIsScrolled] = useState(false);
        const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

        useEffect(() => {
                const handleScroll = () => {
                        setIsScrolled(window.scrollY > 20);
                };
                window.addEventListener("scroll", handleScroll);
                return () => window.removeEventListener("scroll", handleScroll);
        }, []);

        const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
                e.preventDefault();
                const targetId = href.replace("#", "");
                const elem = document.getElementById(targetId);
                if (elem) {
                        const offset = 80; // Offset for fixed navbar
                        const elementPosition = elem.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;

                        window.scrollTo({
                                top: offsetPosition,
                                behavior: "smooth",
                        });
                        setIsMobileMenuOpen(false);
                }
        };

        const scrollToTop = (e: React.MouseEvent) => {
                e.preventDefault();
                window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                });
        };

        return (
                <nav
                        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-3 glass shadow-sm" : "py-5 bg-transparent"
                                }`}
                >
                        <div className="container mx-auto px-4 md:px-6">
                                <div className="flex items-center justify-between">
                                        {/* Logo */}
                                        <a href="#" onClick={scrollToTop} className="flex items-center gap-2 group cursor-pointer">
                                                <div className="bg-primary p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                                                        <GraduationCap className="w-6 h-6 text-white" />
                                                </div>
                                                <span className="text-xl font-bold font-heading tracking-tight">
                                                        Edu<span className="text-primary">Scale</span>
                                                </span>
                                        </a>

                                        {/* Desktop Navigation */}
                                        <div className="hidden md:flex items-center gap-8">
                                                {navLinks.map((link) => (
                                                        <a
                                                                key={link.name}
                                                                href={link.href}
                                                                onClick={(e) => scrollToSection(e, link.href)}
                                                                className="text-sm font-medium text-secondary hover:text-primary transition-colors duration-200 cursor-pointer"
                                                        >
                                                                {link.name}
                                                        </a>
                                                ))}
                                        </div>

                                        {/* Desktop CTAs */}
                                        <div className="hidden md:flex items-center gap-4">
                                                <Link
                                                        href="/login"
                                                        className="text-sm font-semibold hover:text-primary transition-colors duration-200"
                                                >
                                                        Đăng nhập
                                                </Link>
                                                <Link href="/register" className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
                                                        Dùng thử miễn phí
                                                </Link>
                                        </div>

                                        {/* Mobile Menu Toggle */}
                                        <button
                                                className="md:hidden p-2 text-foreground"
                                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                        >
                                                {isMobileMenuOpen ? <X /> : <Menu />}
                                        </button>
                                </div>
                        </div>

                        {/* Mobile Menu */}
                        <AnimatePresence>
                                {isMobileMenuOpen && (
                                        <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="md:hidden bg-white border-t mt-3 overflow-hidden"
                                        >
                                                <div className="flex flex-col p-4 gap-4">
                                                        {navLinks.map((link) => (
                                                                <a
                                                                        key={link.name}
                                                                        href={link.href}
                                                                        onClick={(e) => scrollToSection(e, link.href)}
                                                                        className="text-base font-medium py-2 border-b border-gray-100 cursor-pointer"
                                                                >
                                                                        {link.name}
                                                                </a>
                                                        ))}
                                                        <div className="flex flex-col gap-3 pt-2">
                                                                <Link href="/login" className="w-full text-center py-3 font-semibold border rounded-xl">
                                                                        Đăng nhập
                                                                </Link>
                                                                <Link href="/register" className="w-full bg-primary text-white text-center py-3 rounded-xl font-semibold">
                                                                        Dùng thử miễn phí
                                                                </Link>
                                                        </div>
                                                </div>
                                        </motion.div>
                                )}
                        </AnimatePresence>
                </nav>
        );
}
