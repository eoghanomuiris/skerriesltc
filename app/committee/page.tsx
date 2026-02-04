import { committee } from '@/lib/data/committee';

export default function CommitteePage() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative py-16 px-4 bg-cover bg-bottom" style={{ backgroundImage: "url('/images/hero-banner.png')" }}>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            Committee
          </h1>
          <p className="text-xl text-white" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
            Meet the team behind Skerries LTC
          </p>
        </div>
      </section>

      {/* Committee Members */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committee.map((member) => (
              <div key={member.id} className="bg-[#F5F5F5] rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-[#006D3B] mb-2">{member.name}</h3>
                <p className="text-[#B7D433] font-semibold mb-3">{member.position}</p>
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-600 hover:text-[#006D3B] text-sm transition-colors"
                  >
                    {member.email}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
