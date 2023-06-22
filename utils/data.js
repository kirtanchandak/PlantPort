import bcrypt from "bcryptjs";

export const data = {
  users: [
    {
      name: "Kirtan",
      email: "kirtan@gmail.com",
      password: bcrypt.hashSync("123456"),
    },
    {
      name: "nirali",
      email: "nirali@gmail.com",
      password: bcrypt.hashSync("123456"),
    },
  ],
  products: [
    {
      name: "Stlyish Coffee Planter",
      slug: "coffee-plant",
      price: "20.00",
      img: "https://ik.imagekit.io/kirtanchandak/Plant_Port_/coffee.webp?updatedAt=1687069364083",
      category: "Indoor Planters",
    },
    {
      name: "Tree Trunk Planter",
      slug: "tree-trunk-planter",
      price: "15.00",
      img: "https://ik.imagekit.io/kirtanchandak/Plant_Port_/trunk.webp?updatedAt=1687069364173",
      category: "Indoor Planters",
    },
    {
      name: "Light Green Creramic ",
      slug: "light-green-ceramic-planter",
      price: "25.00",
      img: "https://ik.imagekit.io/kirtanchandak/Plant_Port_/green-ceramic.webp?updatedAt=1687069364110",
      category: "Indoor Planters",
    },
    {
      name: "Plant Box Planter",
      slug: "plant-box-planter",
      price: "30.00",
      img: "https://ik.imagekit.io/kirtanchandak/Plant_Port_/plant-box.webp?updatedAt=1687069364296",
      category: "Indoor Planters",
    },
    {
      name: "Peanut Shape Planter",
      slug: "peanut-shape-planter",
      price: "300.00",
      img: "https://ik.imagekit.io/kirtanchandak/Plant_Port_/fancy_planters/download.webp?updatedAt=1687426981587",
      category: "Fancy Planters",
    },
    {
      name: "Smiley ceramic Planter",
      slug: "smiley-ceramic-planter",
      price: "200.00",
      img: "https://ik.imagekit.io/kirtanchandak/Plant_Port_/fancy_planters/download__1_.webp?updatedAt=1687426981611",
      category: "Fancy Planters",
    },
    {
      name: "Owl On the Tree Planter",
      slug: "owl-on-the-tree-planter",
      price: "250.00",
      img: "https://ik.imagekit.io/kirtanchandak/Plant_Port_/fancy_planters/owl.webp?updatedAt=1687427853930",
      category: "Fancy Planters",
    },
    {
      name: "Cute Cart shape Planter",
      slug: "cute-cart-shape-planter",
      price: "150.00",
      img: "https://ik.imagekit.io/kirtanchandak/Plant_Port_/fancy_planters/cart.webp?updatedAt=1687427854023",
      category: "Fancy Planters",
    },
  ],
};
