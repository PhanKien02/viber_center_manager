"use client";

import { motion } from "framer-motion";
import { UserPlus, ClipboardCheck, Zap, Rocket } from "lucide-react";

const steps = [
        {
                title: "Đăng ký nhanh",
                description: "Khởi tạo tài khoản chỉ trong 30 giây với các thông tin cơ bản của trung tâm.",
                icon: UserPlus,
        },
        {
                title: "Thiết lập trung tâm",
                description: "Nhập danh sách lớp, giáo viên và cài đặt các biểu phí thu học phí.",
                icon: ClipboardCheck,
        },
        {
                title: "Dữ liệu thông minh",
                description: "Sử dụng công cụ import dữ liệu học sinh hàng loạt để tiết kiệm thời gian.",
                icon: Zap,
        },
        {
                title: "Vận hành bứt phá",
                description: "Bắt đầu trải nghiệm sự thay đổi trong cách quản lý chuyên nghiệp hơn.",
                icon: Rocket,
        },
];

export default function Process() {
        return (
                <section id="process" className="py-24 bg-white overflow-hidden">
                        <div className="container mx-auto px-4">
                                <div className="text-center max-w-2xl mx-auto mb-20">
                                        <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4">
                                                Quy Trình Triển Khai
                                        </h2>
                                        <p className="text-3xl md:text-4xl font-bold font-heading mb-6">
                                                Bắt đầu quản lý thông minh chỉ sau 4 bước
                                        </p>
                                </div>

                                <div className="relative">
                                        {/* Connector Line */}
                                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 hidden md:block" />

                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                                                {steps.map((step, index) => (
                                                        <motion.div
                                                                key={index}
                                                                initial={{ opacity: 0, scale: 0.9 }}
                                                                whileInView={{ opacity: 1, scale: 1 }}
                                                                viewport={{ once: true }}
                                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                                className="relative z-10 text-center"
                                                        >
                                                                <div className="w-16 h-16 bg-white border-4 border-muted rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group hover:border-primary transition-colors duration-300">
                                                                        <step.icon className="w-6 h-6 text-primary" />
                                                                </div>
                                                                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                                                                <p className="text-secondary text-sm leading-relaxed">{step.description}</p>

                                                                {/* Step Number Badge */}
                                                                <div className="absolute top-0 right-1/2 translate-x-12 -translate-y-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                                                                        {index + 1}
                                                                </div>
                                                        </motion.div>
                                                ))}
                                        </div>
                                </div>
                        </div>
                </section>
        );
}
