"use client";

import { motion } from "framer-motion";

const stats = [
        { label: "Trung tâm đang sử dụng", value: "200+" },
        { label: "Phụ huynh kết nối", value: "50,000+" },
        { label: "Học phí đã thu qua App", value: "100 tỷ+" },
        { label: "Thời gian tiết kiệm", value: "85%" },
];

export default function Stats() {
        return (
                <section className="py-20 bg-primary">
                        <div className="container mx-auto px-4">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                        {stats.map((stat, index) => (
                                                <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                                        className="text-center"
                                                >
                                                        <div className="text-3xl md:text-5xl font-bold text-white mb-2">
                                                                {stat.value}
                                                        </div>
                                                        <div className="text-blue-100 text-sm md:text-base font-medium">
                                                                {stat.label}
                                                        </div>
                                                </motion.div>
                                        ))}
                                </div>
                        </div>
                </section>
        );
}
