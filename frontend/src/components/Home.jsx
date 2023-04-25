import React from 'react';
import { Card1 } from './Card1';
import {Carousel} from './Carousel';
import { testimonial } from '../content/test';
const Home=()=>
{
    return(
        <div className="">
            
  <section class="bg-gray-100 py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-4 text-center">About Us</h2>
      <p class="max-w-2xl mx-auto mb-8 text-center text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lorem ac mi aliquam mattis non non augue. Sed luctus neque a turpis sollicitudin, sit amet faucibus quam placerat.</p>
      <div class="flex justify-center">
        <img src="https://via.placeholder.com/500x250" alt="About Us" class="w-full max-w-md rounded-lg shadow-md"></img>
      </div>
    </div>
  </section>

  <section class="bg-white py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-4 text-center">Our Initiatives</h2>
      <div class="flex flex-wrap justify-center">
        <div class="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div class="bg-gray-200 rounded-lg p-8">
            <h3 class="text-xl font-bold mb-4">Initiative 1</h3>
            <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lorem ac mi aliquam mattis non non augue.</p>
          </div>
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div class="bg-gray-200 rounded-lg p-8">
            <h3 class="text-xl font-bold mb-4">Initiative 2</h3>
            <p class="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lorem ac mi aliquam mattis non non augue.</p>
          </div>
          </div>
          <div class="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div class="bg-gray-200 rounded-lg p-8">
          <h3 class="text-xl font-bold mb-4">Initiative 3</h3>
          <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lorem ac mi aliquam mattis non non augue.</p>
          </div>
          </div>
          </div>
          </div>
          
            </section>
            <section class="bg-gray-800 py-10">
              <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold mb-4 text-white text-center">Testimonials</h2>
                <div class="flex flex-wrap justify-center">
                 {testimonial.map((content)=>(<Card1 content={content.data} author={content.author}/>) )
                 }
                  </div>
                </div>
            </section>
            <div class="relative">
  <div class="absolute inset-0 bg-gradient-to-r from-zinc-900 to-zinc-500"></div>
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mt-10">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full md:w-1/2 lg:w-1/3 p-4">
          <div class="relative overflow-hidden rounded-lg">
            <div class="absolute inset-0 bg-gray-700 bg-opacity-25 transition-opacity"></div>
            <div class="absolute inset-0 transform translate-x-full transition duration-500 ease-in-out">
              <div class="bg-white h-full p-6">
                <h3 class="text-lg font-medium text-gray-900">Card 1</h3>
                <p class="mt-4 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</p>
              </div>
            </div>
            <div class="relative h-64 bg-gray-700">
              <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1608245293048-28a97fe7f0c9" alt=""></img>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-medium text-gray-900">Card 1</h3>
              <p class="mt-4 text-sm text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</p>
              <div class="mt-6">
                <a href="#" class="text-base font-medium text-indigo-500">Learn more &rarr;</a>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 p-4">
          <div class="relative overflow-hidden rounded-lg">
            <div class="absolute inset-0 bg-gray-700 bg-opacity-25 transition-opacity"></div>
            <div class="absolute inset-0 transform translate-x-full transition duration-500 ease-in-out">
              <div class="bg-white h-full p-6">
                <h3 class="text-lg font-medium text-gray-900">Card 2</h3>
                <p class="mt-4 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</p>
              </div>
            </div>
            <div class="relative h-64 bg-gray-700">
              <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1608245293048-28a97fe7f0c9" alt=""></img>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-medium text-gray-900">Card 2</h3>
              <p class="mt-4 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</p>
              <div class="mt-6">
                <a href="#" class="text-base font
                 -medium text-indigo-500">Learn more →</a>
                 </div>
                 </div>
                 </div>
                 </div>
                 <div class="w-full md:w-1/2 lg:w-1/3 p-4">
                 <div class="relative overflow-hidden rounded-lg">
                 <div class="absolute inset-0 bg-gray-700 bg-opacity-25 transition-opacity"></div>
                 <div class="absolute inset-0 transform translate-x-full transition duration-500 ease-in-out">
                 <div class="bg-white h-full p-6">
                 <h3 class="text-lg font-medium text-gray-900">Card 3</h3>
                 <p class="mt-4 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</p>
                 </div>
                 </div>
                 <div class="relative h-64 bg-gray-700">
                 <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1608245293048-28a97fe7f0c9" alt=""></img>
                 </div>
                 <div class="p-6">
                 <h3 class="text-lg font-medium text-gray-900">Card 3</h3>
                 <p class="mt-4 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</p>
                 <div class="mt-6">
                 <a href="#" class="text-base font-medium text-indigo-500">Learn more →</a>
                 </div>
                 </div>
                 </div>
                 </div>
                 </div>
                 </div>
                 
                   </div>
                 </div>
            <Carousel/>
            <footer class="bg-gray-900 py-10">
              <div class="container mx-auto px-4">
                <p class="text-center text-gray-500">&copy; 2023 NGO Name. All Rights Reserved.</p>
              </div>
            </footer>
          
          ```
         
        </div>
    )
}

export default Home;
