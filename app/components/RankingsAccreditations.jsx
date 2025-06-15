import React from 'react';

const RankingsAccreditations = () => {
  return (
    <div className="rankings-accreditations py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Rankings & Accreditations</h2>
          <div className="flex items-center space-x-4">
            <button className="bg-gray-200 p-3 rounded-full"><svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg></button>
            <span className="text-xl font-semibold text-gray-700">RANKINGS</span>
            <button className="bg-gray-200 p-3 rounded-full"><svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button>
            <span className="text-xl font-semibold text-gray-700">ACCREDITATIONS</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Box 1 */}
          <div className="border p-6 text-center shadow-md border-r border-dotted border-gray-300">
            <img src="/ranking/India_Today_logo.png" alt="India Today Logo" className="mx-auto mb-4 h-16" />
            <div className="text-5xl font-bold text-gray-800 mb-2">1<sup className="text-2xl">st</sup></div>
            <p className="text-gray-600">Amongst all government and private universities in India.</p>
          </div>

          {/* Box 2 */}
          <div className="border p-6 text-center shadow-md border-r border-dotted border-gray-300">
            <img src="/ranking/jagran-josh.png" alt="Jagran Josh Logo" className="mx-auto mb-4 h-16" />
            <div className="text-5xl font-bold text-gray-800 mb-2">1<sup className="text-2xl">st</sup></div>
            <p className="text-gray-600">Among top universities of India.</p>
          </div>

          {/* Box 3 */}
          <div className="border p-6 text-center shadow-md border-r border-dotted border-gray-300">
            <img src="/ranking/nirf.png" alt="NIRF Logo" className="mx-auto mb-4 h-16" />
            <div className="text-5xl font-bold text-gray-800 mb-2">171<sup className="text-2xl">th</sup></div>
            <p className="text-gray-600">Amongst all government and private universities in India.</p>
          </div>

          {/* Box 4 */}
          <div className="border p-6 text-center shadow-md">
            <img src="/ranking/the-week.png" alt="the-week Logo" className="mx-auto mb-4 h-16" />
            <div className="text-5xl font-bold text-gray-800 mb-2">1<sup className="text-2xl">st</sup></div>
            <p className="text-gray-600">Amongst all government and private universities in India.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankingsAccreditations;