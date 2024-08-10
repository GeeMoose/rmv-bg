import * as Craft from "@/components/craft/layout";
import Balancer from "react-wrap-balancer";
import Hero from "@/components/sections/hero";
import CTA from "@/components/sections/cta";

export default function Home() {
  return (
    
    <Craft.Main>
       <Hero />

       {/* <Craft.Section> */}
         {/* <Craft.Container> */}
            <div className="flex flex-wrap justify-center items-center">
              <div className="min-w-[350px] md:min-w-[650px] lg:min-w-[950px]">
                <div>
                  <h2 className="font-extrabold text-4xl md:text-5xl text-center">Stunning Quality</h2>
                </div>
                <div className="mt-10">
                        <nav className="relative z-0 flex border rounded-xl overflow-hidden" aria-label="Tabs" role="tablist">
                            <button type="button" className="hs-tab-active:border-b-amber-400 hs-tab-active:text-black relative min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-md font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none disabled:opacity-50 disabled:pointer-events-none active" id="bar-with-underline-item-1" data-hs-tab="#bar-with-underline-1" aria-controls="bar-with-underline-1" role="tab">People</button>
                            <button type="button" className="hs-tab-active:border-b-amber-400 hs-tab-active:text-black relative min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-md font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none disabled:opacity-50 disabled:pointer-events-none disable" id="bar-with-underline-item-2" data-hs-tab="#bar-with-underline-2" aria-controls="bar-with-underline-2" role="tab">Products</button>
                            <button type="button" className="hs-tab-active:border-b-amber-400 hs-tab-active:text-black relative min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-md font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none disabled:opacity-50 disabled:pointer-events-none disable" id="bar-with-underline-item-3" data-hs-tab="#bar-with-underline-3" aria-controls="bar-with-underline-3" role="tab">Cars</button>
                            <button type="button" className="hs-tab-active:border-b-amber-400 hs-tab-active:text-black relative min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-md font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none disabled:opacity-50 disabled:pointer-events-none disable" id="bar-with-underline-item-4" data-hs-tab="#bar-with-underline-4" aria-controls="bar-with-underline-4" role="tab">Animals</button>
                        </nav>
                        <div className="mt-6">
                            <div id="bar-with-underline-1" role="tabpanel" aria-labelledby="bar-with-underline-item-1">
                                <div className="rounded-3xl border-4 border-gray-500 diff aspect-[16/9]">
                                    <div className="diff-item-1">
                                        <img alt="people-removed" src="images/diff/people-removed.png" />
                                    </div>
                                    <div className="diff-item-2">
                                        <img alt="people" src="images/diff/people.jpg" />
                                    </div>
                                    <div className="diff-resizer"></div>
                                </div>
                            </div>
                            <div id="bar-with-underline-2" className="hidden" role="tabpanel" aria-labelledby="bar-with-underline-item-2">
                                <div className="rounded-3xl border-4 border-gray-500 diff aspect-[16/9]">
                                    <div className="diff-item-1">
                                        <img alt="products-removed" src="images/diff/products-removed.png" />
                                    </div>
                                    <div className="diff-item-2">
                                        <img alt="products" src="images/diff/products.jpg" />
                                    </div>
                                    <div className="diff-resizer"></div>
                                </div>
                            </div>
                            <div id="bar-with-underline-3" className="hidden" role="tabpanel" aria-labelledby="bar-with-underline-item-3">
                                <div className="rounded-3xl border-4 border-gray-500 diff aspect-[16/9]">
                                    <div className="diff-item-1">
                                        <img alt="cars-removed" src="images/diff/cars-removed.png" />
                                    </div>
                                    <div className="diff-item-2">
                                        <img alt="cars" src="images/diff/cars.jpg" />
                                    </div>
                                    <div className="diff-resizer"></div>
                                </div>
                            </div>
                            <div id="bar-with-underline-4" className="hidden" role="tabpanel" aria-labelledby="bar-with-underline-item-4">
                                <div className="rounded-3xl border-4 border-gray-500 diff aspect-[16/9]">
                                    <div className="diff-item-1">
                                        <img alt="animals-removed" src="images/diff/animals-removed.png" />
                                    </div>
                                    <div className="diff-item-2">
                                        <img alt="animals" src="images/diff/animals.jpeg" />
                                    </div>
                                    <div className="diff-resizer"></div>
                                </div>
                            </div>
                        </div>
                </div>
              </div>
            </div>
         {/* </Craft.Container> */}
       {/* </Craft.Section> */}

        <CTA />
    </Craft.Main>
  );
}
