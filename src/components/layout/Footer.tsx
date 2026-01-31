import Link from "next/link";
import { GraduationCap, Facebook, Youtube, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
        return (
                <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
                        <div className="container mx-auto px-4">
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                                        {/* Brand */}
                                        <div className="col-span-1 md:col-span-1">
                                                <Link href="/" className="flex items-center gap-2 mb-6 group">
                                                        <div className="bg-primary p-2 rounded-xl">
                                                                <GraduationCap className="w-6 h-6 text-white" />
                                                        </div>
                                                        <span className="text-xl font-bold font-heading tracking-tight text-white">
                                                                Edu<span className="text-primary">Scale</span>
                                                        </span>
                                                </Link>
                                                <p className="text-sm leading-relaxed mb-6">
                                                        Nâng tầm quản lý trung tâm luyện thi với giải pháp công nghệ hiện đại,
                                                        giúp bạn vận hành thông minh và hiệu quả hơn.
                                                </p>
                                                <div className="flex items-center gap-4">
                                                        <a href="#" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
                                                        <a href="#" className="hover:text-primary transition-colors"><Youtube className="w-5 h-5" /></a>
                                                        <a href="#" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
                                                </div>
                                        </div>

                                        {/* Links */}
                                        <div>
                                                <h4 className="text-white font-bold mb-6">Tính năng</h4>
                                                <ul className="space-y-4 text-sm">
                                                        <li><Link href="#" className="hover:text-white transition-colors">Quản lý học phí</Link></li>
                                                        <li><Link href="#" className="hover:text-white transition-colors">App phụ huynh</Link></li>
                                                        <li><Link href="#" className="hover:text-white transition-colors">Lịch dạy giáo viên</Link></li>
                                                        <li><Link href="#" className="hover:text-white transition-colors">Báo cáo doanh thu</Link></li>
                                                </ul>
                                        </div>

                                        <div>
                                                <h4 className="text-white font-bold mb-6">Công ty</h4>
                                                <ul className="space-y-4 text-sm">
                                                        <li><Link href="#" className="hover:text-white transition-colors">Về chúng tôi</Link></li>
                                                        <li><Link href="#" className="hover:text-white transition-colors">Tin tức</Link></li>
                                                        <li><Link href="#" className="hover:text-white transition-colors">Bảng giá</Link></li>
                                                        <li><Link href="#" className="hover:text-white transition-colors">Tuyển dụng</Link></li>
                                                </ul>
                                        </div>

                                        {/* Contact */}
                                        <div>
                                                <h4 className="text-white font-bold mb-6">Liên hệ</h4>
                                                <ul className="space-y-4 text-sm">
                                                        <li className="flex items-center gap-3">
                                                                <Mail className="w-4 h-4 text-primary" />
                                                                <span>contact@eduscale.vn</span>
                                                        </li>
                                                        <li className="flex items-center gap-3">
                                                                <Phone className="w-4 h-4 text-primary" />
                                                                <span>1900 123 456</span>
                                                        </li>
                                                </ul>
                                        </div>
                                </div>

                                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                                        <p>© 2026 EduScale SaaS. Tất cả quyền được bảo lưu.</p>
                                        <div className="flex items-center gap-6">
                                                <Link href="#" className="hover:text-white transition-colors">Chính sách bảo mật</Link>
                                                <Link href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</Link>
                                        </div>
                                </div>
                        </div>
                </footer>
        );
}
