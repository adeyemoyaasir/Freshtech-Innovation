

const MissionImgCard = () => {
    return (
<div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          {/* Image Section - Curved Design */}
          <div className="md:w-2/5 relative">
            <div className="h-64 md:h-full overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center">
                <div className="w-full h-full bg-cover bg-center" style={{
                  backgroundImage: "url('https://ik.imagekit.io/xprogrammer/images/im%203.png?updatedAt=1748790652688')",
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 25% 50%)',
                  borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
                }}></div>
              </div>
            </div>
          </div>
          
          {/* Content Section - Vertical Tags */}
          <div className="md:w-3/5 p-8 flex flex-col justify-center">
            <div className="space-y-8">
              <div className="relative">
                <h2 className="text-3xl font-bold text-gray-800 mb-1">Tech & Design Studio</h2>
                <div className="absolute bottom-0 left-0 w-20 h-1 bg-blue-500 rounded-full"></div>
              </div>
              
              <div className="relative mt-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-1">Innovative Tech Solutions</h2>
                <div className="absolute bottom-0 left-0 w-20 h-1 bg-indigo-500 rounded-full"></div>
              </div>
              
              <div className="relative mt-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-1">Digital Studio</h2>
                <div className="absolute bottom-0 left-0 w-20 h-1 bg-purple-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    )
}

export default MissionImgCard
