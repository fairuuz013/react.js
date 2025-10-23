// GANTI FILE INI DENGAN:
export default function About() {
    return (
        <div className="max-w-4xl mx-auto py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                    About Us
                </h1>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                        We are committed to creating innovative solutions and providing
                        exceptional experiences for our users.
                    </p>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 my-8">
                        <p className="text-lg font-semibold text-yellow-800 text-center">
                            🚀 MANA 19 JUTA LAPANGAN PEKERJAAN NYA 🚀
                        </p>
                    </div>

                    <p className="text-gray-600">
                        Our mission is to empower individuals and businesses through
                        cutting-edge technology and dedicated support.
                    </p>
                </div>
            </div>
        </div>
    )
}