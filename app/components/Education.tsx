import { GraduationCap, MapPin } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-400">Education</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-black/50 p-8 rounded-xl border border-blue-900/30 hover:border-blue-400/50 transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="bg-blue-400 p-3 rounded-full">
                <GraduationCap size={32} className="text-black" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-blue-400 mb-2">Engineer's Degree in Software Technology</h3>
                <h4 className="text-lg font-semibold text-white mb-3">HCMC University of Technology and Education</h4>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                  <div className="flex items-center text-gray-400">
                    <MapPin size={16} className="mr-2" />
                    Ho Chi Minh City, Vietnam
                  </div>
                  <div className="text-gray-400">2021 - 2025</div>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg">
                  <span className="text-blue-300 font-semibold">GPA: </span>
                  <span className="text-white text-lg font-bold">3.2 / 4.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
