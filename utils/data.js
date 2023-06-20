import bcrypt from "bcryptjs";

export const data = {
  users: [
    {
      name: "Kirtan",
      email: "kirtan@gmail.com",
      password: bcrypt.hashSync("123456"),
    },
  ],
  products: [
    {
      id: "1",
      name: "Stlyish Coffee Planter",
      slug: "coffee-plant",
      price: "20.00",
      img: "https://ik.imagekit.io/kirtanchandak/Plant_Port_/coffee.webp?updatedAt=1687069364083",
    },
    {
      id: "2",
      name: "Tree Trunk Planter",
      slug: "tree-trunk-planter",
      price: "15.00",
      img: "https://ik.imagekit.io/kirtanchandak/Plant_Port_/trunk.webp?updatedAt=1687069364173",
    },
    {
      id: "3",
      name: "Light Green Creramic ",
      slug: "light-green-ceramic-planter",
      price: "25.00",
      img: "https://ik.imagekit.io/kirtanchandak/Plant_Port_/green-ceramic.webp?updatedAt=1687069364110",
    },
    {
      id: "4",
      name: "Plant Box Planter",
      slug: "plant-box-planter",
      price: "30.00",
      img: "https://ik.imagekit.io/kirtanchandak/Plant_Port_/plant-box.webp?updatedAt=1687069364296",
    },
  ],
};
