import React from "react";
import "./home.css";
import pic from "../img/pic.PNG";
import { Button } from "@material-tailwind/react";
import pic1 from "../img/pic2.jpg";
import pic2 from "../img/gh.jpg";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <h2>Education & School</h2>
        <h1>SHOWCASE COURSES, EVENTS AND MORE!</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure eos,
          est dolores quasi perspiciatis non omnis quaerat pariatur iusto alias
          sit mollitia voluptas quisquam molestiae fugiat obcaecati sint, ex
          laboriosam?
        </p>
        <Button className="btn">Get started now</Button>
      </div>
      <div className="grid grid-cols-2 gap-36 pt-20 p-10 bg-red-50">
        <div>
          <img src={pic} />
        </div>

        <div>
          <h1 className="font-extrabold uppercase text-gray-700 text-3xl leading-15 mb-10">
            A COMPREHENSIVE TEACHING APPROACH
          </h1>
          <p className="leading-10 text-2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
            deserunt harum, quasi reprehenderit aliquid corporis repellendus
            iste sint animi ad. Molestiae voluptate incidunt voluptas ad
            repudiandae voluptatem quidem. Ab, dolorum!
          </p>
          <p className="leading-10 text-2xl pt-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
            deserunt harum, quasi reprehenderit aliquid corporis repellendus
            iste sint animi ad. Molestiae voluptate incidunt voluptas ad
            repudiandae voluptatem quidem. Ab, dolorum! <br />
            <a href="#" className="text-[green] px-9 underline">
              Learn More
            </a>
          </p>
        </div>
      </div>
      <div className="p-20 text-center text-2xl">
        <h1 className="text-gray-700 text-4xl mb-5">PROGRAMS WE OFFER</h1>
        <p className="w-11/12">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          repellendus dolore quis maxime. Dolorem aut deleniti voluptatum minima
          vel! Reprehenderit fugit eaque obcaecati, voluptatem accusamus
          expedita labore dignissimos consequuntur blanditiis.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-1 p-10">
        <div className="py-3 pl-60">
          <Card className="border border-gray-700  w-full max-w-[26rem] shadow-lg">
            <CardHeader
              floated={false}
              color="blue-gray"
              className="card-image"
            >
              <img src={pic2} alt="ui/ux review check" />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
              <IconButton
                size="sm"
                color="red"
                variant="text"
                className="!absolute top-4 right-4 rounded-full"
              ></IconButton>
            </CardHeader>
            <CardBody>
              <div className="mb-3 flex items-center justify-between">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-medium"
                >
                  Wooden House, Florida
                </Typography>
              </div>
              <Typography color="gray">
                Enter a freshly updated and thoughtfully furnished peaceful home
                surrounded by ancient trees, stone walls, and open meadows.
              </Typography>
              <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                <a href="#" className="text-[green] px-9 underline">
                  Learn More
                </a>
              </div>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className="border border-gray-700 w-full max-w-[26rem] shadow-lg">
            <CardHeader floated={false} color="blue-gray">
              <img src={pic1} alt="ui/ux review check" />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
              <IconButton
                size="sm"
                color="red"
                variant="text"
                className="!absolute top-4 right-4 rounded-full"
              ></IconButton>
            </CardHeader>
            <CardBody>
              <div className="mb-3 flex items-center justify-between">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-medium"
                >
                  Wooden House, Florida
                </Typography>
              </div>
              <Typography color="gray">
                Enter a freshly updated and thoughtfully furnished peaceful home
                surrounded by ancient trees, stone walls, and open meadows.
              </Typography>
              <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                <a href="#" className="text-[green] px-9 underline">
                  Learn More
                </a>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-2 bg-green-100 gap-36 pt-20 p-10 bg-red-50">
        <div>
          <h1 className="font-extrabold uppercase  text-gray-700 text-3xl leading-15 mb-10">
            A COMPREHENSIVE TEACHING APPROACH
          </h1>
          <p className="leading-10 text-2xl border border-gray-700 p-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
            deserunt harum, quasi reprehenderit aliquid corporis repellendus
            iste sint animi ad. Molestiae voluptate incidunt voluptas ad
            repudiandae voluptatem quidem. Ab, dolorum!
          </p>
          <br />

          <p className="leading-10 text-2xl pt-8 border border-gray-700 p-3 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
            deserunt harum, quasi reprehenderit aliquid corporis repellendus
            iste sint animi ad. Molestiae voluptate incidunt voluptas ad
            repudiandae voluptatem quidem. Ab, dolorum! <br />
            <a href="#" className="text-[green] px-9 underline">
              Learn More
            </a>
          </p>
        </div>

        <div className="p-20 text-center text-2xl ">
          <div className="w-full">
            <img src={pic} />
          </div>
        </div>
      </div>
      <h1 className="text-4xl text-gray-800 mb-3 text-center pt-2">
        TOP STORIES
      </h1>

      <div className="grid grid-cols-3 p-32">
        <div>
          <Card className="w-full max-w-[26rem] shadow-lg">
            <CardHeader floated={false} color="blue-gray">
              <img src={pic1} alt="ui/ux review check" />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
              <IconButton
                size="sm"
                color="red"
                variant="text"
                className="!absolute top-4 right-4 rounded-full"
              ></IconButton>
            </CardHeader>
            <CardBody>
              <div className="mb-3 flex items-center justify-between">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-medium text-3xl"
                >
                  Wooden House, Florida
                </Typography>
              </div>
              <Typography color="gray" className="text-2xl">
                Enter a freshly updated and thoughtfully furnished peaceful home
                surrounded by ancient trees, stone walls, and open meadows.
              </Typography>
            </CardBody>
          </Card>
        </div>

        <div>
          <Card className="w-full max-w-[26rem] shadow-lg">
            <CardHeader floated={false} color="blue-gray">
              <img src={pic1} alt="ui/ux review check" />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
              <IconButton
                size="sm"
                color="red"
                variant="text"
                className="!absolute top-4 right-4 rounded-full"
              ></IconButton>
            </CardHeader>
            <CardBody>
              <div className="mb-3 flex items-center justify-between">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-medium text-3xl"
                >
                  Wooden House, Florida
                </Typography>
              </div>
              <Typography color="gray" className="text-2xl">
                Enter a freshly updated and thoughtfully furnished peaceful home
                surrounded by ancient trees, stone walls, and open meadows.
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className="w-full max-w-[26rem] shadow-lg">
            <CardHeader floated={false} color="blue-gray">
              <img src={pic1} alt="ui/ux review check" />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
              <IconButton
                size="sm"
                color="red"
                variant="text"
                className="!absolute top-4 right-4 rounded-full"
              ></IconButton>
            </CardHeader>
            <CardBody>
              <div className="mb-3 flex items-center justify-between">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-medium text-3xl"
                >
                  Wooden House, Florida
                </Typography>
              </div>
              <Typography color="gray" className="text-2xl">
                Enter a freshly updated and thoughtfully furnished peaceful home
                surrounded by ancient trees, stone walls, and open meadows.
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
      <hr/>
      <div>
        <h1 className="text-center text-3xl">OUR PARTNERS</h1>
      </div>

      
    </>
  );
};
export default Home;
