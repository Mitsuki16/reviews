import { useEffect, useState } from "react";
import "./App.css";
import ReviewItem from "./ReviewItem";

let INIT_DATA = [
  {
    id: "503a5ca9-ff73-4eb5-a7f1-2a3d38e2d9ad",
    name: "Jacobs Pierce",
    date_of_birth: "07-02-2016",
    position: "Web Developer",
    description:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    image_url:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
  },
  {
    id: "072731ac-87ff-489d-a337-7b79213ef7a3",
    name: "Berger Morrison",
    date_of_birth: "09-09-2021",
    position: "Programmer",
    description:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
    image_url:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
  },
  {
    id: "1755df2f-a759-432a-8f2b-dec3320cd6af",
    name: "Rosa Mejia",
    date_of_birth: "01-07-2019",
    position: "Content Writer",
    description:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    image_url:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
  },
  {
    id: "32cf4de6-1e61-46ed-91a4-8ff229e48c84",
    name: "Katie Flores",
    date_of_birth: "18-04-2021",
    position: "Boss",
    description:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal",
    image_url:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
  },
];

function App() {
  let [userItem, setuserItem] = useState(INIT_DATA[2]);

  function handleRandom() {
    setuserItem(INIT_DATA[Math.floor(Math.random() * (4))]);
  }

  function handlePrevious() {
    let ind = INIT_DATA.findIndex((item) => {
      return item.id === userItem.id;
    });
    setuserItem(INIT_DATA[ind === 0 ? INIT_DATA.length - 1 : ind - 1]);
  }

  function handleNext() {
    let ind = INIT_DATA.findIndex((item) => {
      return item.id === userItem.id;
    });
    setuserItem(INIT_DATA[ind === INIT_DATA.length - 1 ? 0 : ind + 1]);
  }

  return (
    <div>
      <div className="grid place-content-center h-[100vh] ">
        <div>
          <h1 className="text-4xl w-60 mx-auto font-extrabold">Our Reviews</h1>
          <h1 className=" w-28 border-2 mx-auto mt-2 border-cyan-400"></h1>
        </div>
        <ReviewItem
          onPreviousClick={handlePrevious}
          onNextClick={handleNext}
          onRandomClick={handleRandom}
          key={userItem.id}
          {...userItem}
        />
      </div>
    </div>
  );
}

export default App;
