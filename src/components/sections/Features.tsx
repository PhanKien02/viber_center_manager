"use client";

import { motion } from "framer-motion";
import {
        CreditCard,
        Smartphone,
        Calendar,
        BarChart3,
        CheckCircle2
} from "lucide-react";

const features = [
        {
                title: "Quản lý học phí tự động",
                description: "Tự động hóa việc nhắc phí, thu phí qua mã QR và xuất hóa đơn điện tử chỉ trong 1 giây.",
                icon: CreditCard,
                color: "bg-blue-500",
                benefits: ["Nhắc nợ tự động qua Zalo/SMS", "Đối soát ngân hàng tức thì", "Lịch sử thanh toán minh bạch"],
        },
        {
                title: "Kết nối phụ huynh qua App",
                description: "Phụ huynh theo dõi điểm danh, kết quả học tập và thông báo từ trung tâm mọi lúc mọi nơi.",
                icon: Smartphone,
                color: "bg-indigo-500",
                benefits: ["Số liên lạc điện tử", "Báo cáo chuyên cần", "Trao đổi 1-1 với giáo viên"],
        },
        {
                title: "Quản lý lịch dạy thông minh",
                description: "Sắp xếp thời khóa biểu, quản lý phòng học và tính lương giáo viên tự động theo tiết dạy.",
                icon: Calendar,
                color: "bg-cyan-500",
                benefits: ["Xử lý trùng lịch học", "Chấm công bằng QR-Code", "Quản lý giáo viên thỉnh giảng"],
        },
        {
                title: "Báo cáo tài chính & Doanh thu",
                description: "Hệ thống biểu đồ trực quan giúp bạn nắm bắt dòng tiền, lợi nhuận và dự báo tăng trưởng.",
                icon: BarChart3,
                color: "bg-blue-600",
                benefits: ["Báo cáo lỗ lãi P&L", "Phân tích nguồn học viên", "Quản lý chi phí vận hành"],
        },
];

export default function Features() {
        return (
                <section id="features" className="py-24 bg-muted/50">
                        <div className="container mx-auto px-4 md:px-6">
                                <div className="text-center max-w-3xl mx-auto mb-20">
                                        <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4">
                                                Tính Năng Ưu Việt
                                        </h2>
                                        <p className="text-3xl md:text-4xl font-bold font-heading mb-6">
                                                Mọi công cụ bạn cần để quản lý trung tâm chuyên nghiệp
                                        </p>
                                        <p className="text-secondary text-lg">
                                                EduScale được thiết kế chuyên biệt cho các trung tâm luyện thi, giải quyết triệt để
                                                những khó khăn trong vận hành hàng ngày.
                                        </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {features.map((feature, index) => (
                                                <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, y: 30 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                                        className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
                                                >
                                                        <div className="flex flex-col md:flex-row gap-6">
                                                                <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                                        <feature.icon className="w-8 h-8 text-white" />
                                                                </div>
                                                                <div>
                                                                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                                                                {feature.title}
                                                                        </h3>
                                                                        <p className="text-secondary mb-6 leading-relaxed">
                                                                                {feature.description}
                                                                        </p>
                                                                        <ul className="grid grid-cols-1 gap-3">
                                                                                {feature.benefits.map((benefit, bIndex) => (
                                                                                        <li key={bIndex} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                                                                                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                                                                                {benefit}
                                                                                        </li>
                                                                                ))}
                                                                        </ul>
                                                                </div>
                                                        </div>
                                                </motion.div>
                                        ))}
                                </div>
                        </div>
                </section>
        );
}
