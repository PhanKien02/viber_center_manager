"use client";

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
            <div
              key={index}
              className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-blue-100 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
