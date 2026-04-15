export default function Focus01() {
  return (
    <section className="px-6 md:px-12 py-24 bg-surface-low">
      <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-4">
        <div>
          <span className="surgical-label text-primary text-[12px] font-bold uppercase block mb-4">Focus 01</span>
          <h3 className="display-lg tracking-[-0.04em] text-6xl md:text-8xl font-black uppercase text-foreground">Graphic Design</h3>
        </div>
      </div>
      <div className="flex flex-col gap-16">
        <div className="w-full group relative aspect-[16/9] overflow-hidden bg-surface-high">
          <img 
            alt="Editorial Identity" 
            className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1WXBvD5NuCn-u868A35vyIuZkJR42StkvUOPVIJTQd3i3Z30-WGEdCFHhDEm6bXowwX7fcLC_AFWAbA-KDHsTUcghjOqGlPzSlsbB4vJQgD42QjooiUYhB6_dd1tJ0EnVrrYBky7Wsu134ymz77ZA0qfwe4Dw-aXCKLTv8_qzoxEVdS8B2bF7YpaB_9ejHyY4cxblkhMUNBhGQRZEL5eyywjKDB9J_bGYchw2aEEfl-LFkwo1YB0mjiGbp8eHoJkx0BR73U89CwM" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
          <div className="absolute bottom-8 left-8">
            <span className="surgical-label text-[10px] text-primary bg-background px-3 py-1">PROJECT 01</span>
            <h4 className="text-3xl font-black uppercase mt-2">Editorial Identity</h4>
          </div>
        </div>
        <div className="w-full group relative aspect-[16/9] overflow-hidden bg-surface-high">
          <img 
            alt="Print Series" 
            className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz3htUxlCHEjonoHUAxNl1vE7vGfHy5whPio2GQ8mdg8YYi3ZJh0kQA5pvob8NjnrsLlhi_YJMxTa_NH2_4DS8ZuBBcSeYvC2CogAwXdxtNVZq7vTS_za2KamQJa-LB8f2QdHlAkeFMygAZvifAotlUJP8W9fNAfhXrsZH3HS2t_q83s29YCuaTjlpYIziB1bbsROao9YSg0tc71BTnosFynAmIeVJFsqK-VA2_eAYL0IFjUnhq7TtaQ8vG2z60eFmnkf23hbWvzk" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
          <div className="absolute bottom-8 left-8">
            <span className="surgical-label text-[10px] text-primary bg-background px-3 py-1">PROJECT 02</span>
            <h4 className="text-3xl font-black uppercase mt-2">Print Series</h4>
          </div>
        </div>
      </div>
    </section>
  )
}
