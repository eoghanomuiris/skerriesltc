export default function CourtEtiquettePage() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative py-16 px-4 bg-cover bg-bottom" style={{ backgroundImage: "url('/images/hero-banner.png')" }}>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Court Etiquette
          </h1>
          <p className="text-xl text-white">
            Guidelines for courteous play at Skerries LTC
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-8">
              The following rules of etiquette are mostly common courtesy, and should be followed whether you're playing tennis or being a spectator. 
              Most of us know the right thing to do – we just need a gentle reminder every now and then!
            </p>

            <div className="space-y-8">
              {/* Rule 1 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#006D3B]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#006D3B] text-white rounded-full flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#006D3B] mb-3">Show Respect and Courtesy</h3>
                    <p className="text-gray-700">
                      Show respect and courtesy to your opponent(s), your partner, and others on or near the courts. 
                      Keep your voice down and confined to your court as much as possible so as not to disrupt players on adjacent courts. 
                      If you get into a loud dispute with your opponent, take it off the court and away from other players.
                    </p>
                  </div>
                </div>
              </div>

              {/* Rule 2 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#006D3B]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#006D3B] text-white rounded-full flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#006D3B] mb-3">Do NOT Walk Onto Another Court During a Game</h3>
                    <p className="text-gray-700">
                      Wait for the players to finish the game, or minimally the point, before walking onto or behind their court. 
                      It is very distracting to have someone disrupt a game in progress, so if you must cross another court, 
                      do so after the game is finished, and go around the court, not through the middle.
                    </p>
                  </div>
                </div>
              </div>

              {/* Rule 3 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#006D3B]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#006D3B] text-white rounded-full flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#006D3B] mb-3">Do Not Retrieve Your Ball from Another Court</h3>
                    <p className="text-gray-700">
                      As with the above, it is common courtesy not to disrupt players on court during a match. 
                      If your ball rolls onto an adjacent court, wait for them to finish the game or point, and kindly ask for "a little help" to get their attention. 
                      Under no circumstances should you run over onto their court in the middle of a game to retrieve the ball yourself.
                    </p>
                  </div>
                </div>
              </div>

              {/* Rule 4 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#006D3B]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#006D3B] text-white rounded-full flex items-center justify-center text-xl font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#006D3B] mb-3">Close the Gate Behind You</h3>
                    <p className="text-gray-700">
                      Whether you're coming onto the courts, or leaving, it is common courtesy to close the gate behind you. 
                      This will keep the balls inside the confines of the gate and they won't roll outside. 
                      This should be taken into consideration with point 2 also.
                    </p>
                  </div>
                </div>
              </div>

              {/* Rule 5 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#006D3B]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#006D3B] text-white rounded-full flex items-center justify-center text-xl font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#006D3B] mb-3">Pick Up After Yourself</h3>
                    <p className="text-gray-700">
                      Don't leave empty tennis ball cans, glasses, plastic beakers or old tennis balls out on the court when you leave.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Closing Message */}
            <div className="mt-12 bg-[#F5F5F5] rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-[#006D3B] mb-4">Have Fun!</h3>
              <p className="text-gray-700">
                You can follow these rules of etiquette and still have a good time on the courts – 
                the players on adjacent courts will appreciate it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
