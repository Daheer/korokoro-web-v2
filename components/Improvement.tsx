import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ImageFlow = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0 mt-8">
        {/* Image 1 */}
        <div className="rounded-xl flex items-center justify-center">
          <Card className="relative">
            <CardContent className="p-0">
              <img
                src="./chair.png" // Replace with your image URL
                alt="Landscape"
                className="w-80 h-80 object-cover rounded-lg"
              />
            </CardContent>
            {/* Footer Overlay */}
            <CardFooter className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
              <p className="text-sm">Input</p>
            </CardFooter>
          </Card>
        </div>

        {/* Curvy Arrow (Horizontal) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="20"
          y="20"
          className="h-12 hidden sm:block"
          viewBox="0 0 100 125"
        >
          <path d="M62.793,14.789h-4.426c0,14.174,7.769,26.53,19.189,32.868H5v4.517h72.556c-11.42,6.338-19.189,18.694-19.189,32.868h4.426  c0-18.123,14.448-32.868,32.207-32.868v-4.517C77.241,47.657,62.793,32.913,62.793,14.789z" />
        </svg>

        {/* Curvy Arrow (Vertical) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="20"
          y="20"
          className="h-12 block sm:hidden"
          viewBox="0 0 100 125"
          transform="rotate(90 0 0)"
          enableBackground="new 0 0 100 100"
        >
          <path d="M62.793,14.789h-4.426c0,14.174,7.769,26.53,19.189,32.868H5v4.517h72.556c-11.42,6.338-19.189,18.694-19.189,32.868h4.426  c0-18.123,14.448-32.868,32.207-32.868v-4.517C77.241,47.657,62.793,32.913,62.793,14.789z" />
        </svg>

        {/* Image 2 */}
        <div className="rounded-xl flex items-center justify-center">
          <Card className="relative">
            <CardContent className="p-0">
              <img
                src="./result-v1.png" // Replace with your image URL
                alt="Landscape"
                className="w-80 h-80 object-cover rounded-lg"
              />
            </CardContent>
            {/* Footer Overlay */}
            <CardFooter className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
              <p className="text-sm">KoroKoro Version One</p>
            </CardFooter>
          </Card>
        </div>

        {/* Curvy Arrow (Horizontal) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="20"
          y="20"
          className="h-12 hidden sm:block"
          viewBox="0 0 100 125"
          enableBackground="new 0 0 100 100"
        >
          <path d="M62.793,14.789h-4.426c0,14.174,7.769,26.53,19.189,32.868H5v4.517h72.556c-11.42,6.338-19.189,18.694-19.189,32.868h4.426  c0-18.123,14.448-32.868,32.207-32.868v-4.517C77.241,47.657,62.793,32.913,62.793,14.789z" />
        </svg>

        {/* Curvy Arrow (Vertical) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="20"
          y="20"
          className="h-12 block sm:hidden"
          viewBox="0 0 100 125"
          transform="rotate(90 0 0)"
          enableBackground="new 0 0 100 100"
        >
          <path d="M62.793,14.789h-4.426c0,14.174,7.769,26.53,19.189,32.868H5v4.517h72.556c-11.42,6.338-19.189,18.694-19.189,32.868h4.426  c0-18.123,14.448-32.868,32.207-32.868v-4.517C77.241,47.657,62.793,32.913,62.793,14.789z" />
        </svg>

        {/* Image 3 */}
        <div className="rounded-xl flex items-center justify-center">
          <Card className="relative">
            <CardContent className="p-0">
              <img
                src="./result-v2.png" // Replace with your image URL
                alt="Landscape"
                className="w-80 h-80 object-cover rounded-lg"
              />
            </CardContent>
            {/* Footer Overlay */}
            <CardFooter className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
              <p className="text-sm">KoroKoro Version Two</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ImageFlow;
