function App() {
  return (
    <>
      <div id="main">
        <div className="container mx-auto h-100">
          <div className="flex flex-wrap -mx-3 mb-5 removabl mt-20">
            {/* SECTION 1 */}
            <div className="w-full max-w-full px-3 mb-6 lg:w-1/3 sm:flex-none xl:mb-0 drop-zone">
              <div id="section-1">
                <div id="great">
                  <h1 className="text-9xl font-bold tracking-tight text-gray-900 sm:text-9xl font-extrabold">
                    Good <br />
                    Morning
                  </h1>
                </div>
                <div id="status">
                  <p className="pt-5 text-2xl font-light">
                    Hello, Its Perfect for morning walk
                  </p>
                </div>
                <div className="relative h-32 w-100" id="wind">
                  <div className="absolute bottom-0 left-0 h-16">
                    <p className="pt-5 text-2xl font-light">Wind</p>
                    <p className="text-2xl font-normal">Medium Light</p>
                    <p className="text-2xl font-light">NorthWest</p>
                  </div>
                </div>
              </div>
            </div>
            {/* END SECTION 1 */}

            {/* SECTION 2 */}
            <div className="w-full max-w-full px-3 mb-6 lg:w-1/3 sm:flex-none xl:mb-0 drop-zone">
              <div className="flex h-screen">
                <div className="m-auto">
                  <img
                    className="relative z-10 object-none h-auto w-full"
                    src="https://cdn.dribbble.com/users/622977/screenshots/6473478/weather-test-4.gif"
                  />
                </div>
              </div>
            </div>
            {/* END SECTION 2 */}

            {/* SECTION 3 */}
            <div className="w-full max-w-full px-3 mb-6 lg:w-1/3 sm:flex-none xl:mb-0 drop-zone">
              <div id="temp">
                <div className="relative h-32 w-full ...">
                  <div className="absolute top-0 right-0">
                    <span className="text-9xl font-bold tracking-tight text-gray-900 sm:text-9xl font-extrabold">
                      27<sup className="font-light">0C</sup>
                    </span>

                    <div className="pt-5" id="area">
                      <p className="text-2xl font-light">
                        Baguio City, Benguet
                      </p>
                      <p className="text-2xl font-light">Mostly Sunny</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-80 w-full" id="five-day-forecast">
                <div className="absolute bottom-0 right-0 h-16 w-80">
                  <div className="grid grid-cols-3 gap-3 text-center text-justify text-xl">
                    {/** 5 Day Weather List */}
                    <div className="py-5 text-center">
                      <span className="font-medium">MON</span>
                    </div>
                    <div className="py-5 text-center">
                      20<sup className="font-light">0C</sup>
                    </div>
                    <div>
                      <img src="https://cdn.dribbble.com/users/622977/screenshots/6473478/weather-test-4.gif" />
                    </div>

                    <div className="py-5 text-center">
                      <span className="font-medium">TUE</span>
                    </div>
                    <div className="py-5 text-center">
                      20<sup className="font-light">0C</sup>
                    </div>
                    <div>
                      <img src="https://cdn.dribbble.com/users/622977/screenshots/6473478/weather-test-4.gif" />
                    </div>

                    <div className="py-5 text-center">
                      <span className="font-medium">WED</span>
                    </div>
                    <div className="py-5 text-center">
                      20<sup className="font-light">0C</sup>
                    </div>
                    <div>
                      <img src="https://cdn.dribbble.com/users/622977/screenshots/6473478/weather-test-4.gif" />
                    </div>

                    <div className="py-5 text-center">
                      <span className="font-medium">THU</span>
                    </div>
                    <div className="py-5 text-center">
                      20<sup className="font-light">0C</sup>
                    </div>
                    <div>
                      <img src="https://cdn.dribbble.com/users/622977/screenshots/6473478/weather-test-4.gif" />
                    </div>

                    <div className="py-5 text-center">
                      <span className="font-medium">FRI</span>
                    </div>
                    <div className="py-5 text-center">
                      20<sup className="font-light">0C</sup>
                    </div>
                    <div>
                      <img src="https://cdn.dribbble.com/users/622977/screenshots/6473478/weather-test-4.gif" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END SECTION 3 */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
