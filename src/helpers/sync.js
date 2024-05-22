"use strict";

module.exports = async function () {
  // return null;

  /* REMOVE DATABASE *
  const { mongoose } = require("../configs/dbConnection");
  await mongoose.connection.dropDatabase();
  console.log("- Database and all data DELETED!");
  /* REMOVE DATABASE */

  /* Coffee *
  const Coffee = require("../models/coffee");
  await Coffee.deleteMany(); // !!! Clear collection.
  await Coffee.create({
    _id: 1,
    title: "Harika Kahve",
    category_id: description: "Özel karışım, harika lezzet!",
    price: 24.99,
    stock_quantity: 50,
    origin: "Brezilya",
    roast_level: "Orta",
    flavor_notes: ["Çikolata", "Fındık", "Vanilya"],
  }),
    await Coffee.create({
      _id: 2,
      title: "Yoğun Lezzet",
      category_id: 2,
      description: "Güçlü ve yoğun aromalar.",
      price: 29.99,
      stock_quantity: 30,
      origin: "Kolombiya",
      roast_level: "Koyu",
      flavor_notes: ["Karamel", "Kara Kiraz", "Baharatlı"],
    }),
    await Coffee.create({
      _id: 3,
      title: "Hafif Sipariş",
      category_id: 2,
      description: "Hafif ve ferahlatıcı bir deneyim.",
      price: 19.99,
      stock_quantity: 40,
      origin: "Etiyopya",
      roast_level: "Hafif",
      flavor_notes: ["Meyve", "Çiçek", "Nane"],
    }),
    await Coffee.create({
      _id: 4,
      title: "Espresso Gücü",
      category_id: 2,
      description: "Espresso severler için güçlü bir tercih.",
      price: 27.99,
      stock_quantity: 25,
      origin: "İtalya",
      roast_level: "Orta-Koyu",
      flavor_notes: ["Çikolata", "Fındık", "Kavrulmuş Ekmek"],
    }),
    await Coffee.create({
      _id: 5,
      title: "Özel Karışım",
      category_id: 2,
      description: "Uzmanlar tarafından özel olarak hazırlanan karışım.",
      price: 34.99,
      stock_quantity: 20,
      origin: "Karışık",
      roast_level: "Orta",
      flavor_notes: ["Karışık Notlar"],
    }),
    await Coffee.create({
      _id: 6,
      title: "Doğal Yollarla Yetiştirilmiş",
      category_id: 2,
      description: "Kimyasal gübre veya ilaç içermez.",
      price: 39.99,
      stock_quantity: 15,
      origin: "Peru",
      roast_level: "Hafif",
      flavor_notes: ["Meyve", "Çiçek", "Ahududu"],
    }),
    await Coffee.create({
      _id: 7,
      title: "Geleneksel Türk Kahvesi",
      category_id: 2,
      description: "Türk kahvesi keyfi evinizde!",
      price: 22.99,
      stock_quantity: 35,
      origin: "Türkiye",
      roast_level: "Orta",
    }),
    await Coffee.create({
      _id: 8,
      title: "Vanilla Dream",
      category_id: 2,
      description: "Vanilya sevenler için rüya gibi bir kahve.",
      price: 31.99,
      stock_quantity: 28,
      origin: "Madagaskar",
      roast_level: "Orta",
      flavor_notes: ["Vanilya", "Karamel", "Hafif Baharatlı"],
    }),
    await Coffee.create({
      _id: 9,
      title: "Organik Karadeniz",
      category_id: 2,
      description: "Doğal ve organik, Karadeniz'in en iyisi.",
      price: 26.99,
      stock_quantity: 22,
      origin: "Türkiye",
      roast_level: "Orta-Koyu",
      flavor_notes: ["Çikolata", "Fındık", "Hafif Baharatlı"],
    }),
    await Coffee.create({
      _id: 10,
      title: "Özel Filtrasyon",
      category_id: 2,
      description: "Özel filtre yöntemiyle hazırlanmış.",
      price: 29.99,
      stock_quantity: 18,
      origin: "Kenya",
      roast_level: "Orta",
      flavor_notes: ["Meyve", "Çiçek", "Şeker Kamışı"],
    }),
    await Coffee.create({
      _id: 11,
      title: "Iced Coffee",
      category_id: 2,
      description: "Soğuk kahve keyfi!",
      price: 17.99,
      stock_quantity: 45,
      origin: "Kolombiya",
      roast_level: "Hafif",
      flavor_notes: ["Çikolata", "Kara Kiraz", "Buzlu"],
    }),
    await Coffee.create({
      _id: 12,
      title: "Kahve Çikolata Karışımı",
      category_id: 2,
      description: "İki lezzet bir arada.",
      price: 32.99,
      stock_quantity: 23,
      origin: "Karışık",
      roast_level: "Orta-Koyu",
      flavor_notes: ["Çikolata", "Vanilya", "Fındık"],
    }),
    await Coffee.create({
      _id: 13,
      title: "Bergamot Burst",
      category_id: 2,
      description: "Bergamot aromasıyla canlanın!",
      price: 28.99,
      stock_quantity: 27,
      origin: "Kosta Rika",
      roast_level: "Orta",
      flavor_notes: ["Bergamot", "Çiçek", "Meyve"],
    }),
    await Coffee.create({
      _id: 14,
      title: "Dark Delight",
      category_id: 2,
      description: "Koyu kavrulmuş bir zevk.",
      price: 36.99,
      stock_quantity: 16,
      origin: "Brexit Coffee Co.",
      roast_level: "Koyu",
      flavor_notes: ["Koyu Çikolata", "Fındık", "Kavrulmuş Ekmek"],
    }),
    await Coffee.create({
      _id: 15,
      title: "Sürpriz Karışım",
      category_id: 2,
      description: "Her fincanda farklı bir lezzet sürprizi!",
      price: 38.99,
      stock_quantity: 14,
      origin: "Dünya Geneli",
      roast_level: "Orta-Koyu",
      flavor_notes: ["Karışık Notlar"],
    }),
    await Coffee.create({
      _id: 16,
      title: "Şeker Kamışı Rüyası",
      category_id: 2,
      description: "Doğal şeker kamışı notalarıyla tatlı bir deneyim.",
      price: 30.99,
      stock_quantity: 31,
      origin: "Brasil",
      roast_level: "Orta",
      flavor_notes: ["Şeker Kamışı", "Vanilya", "Çikolata"],
    }),
    await Coffee.create({
      _id: 17,
      title: "Honey Hike",
      category_id: 2,
      description: "Ballı bir yolculuk!",
      price: 25.99,
      stock_quantity: 29,
      origin: "Etiyopya",
      roast_level: "Hafif",
      flavor_notes: ["Bal", "Meyve", "Çiçek"],
    }),
    await Coffee.create({
      _id: 18,
      title: "Mocha Magic",
      category_id: 2,
      description: "Mocha severler için sihirli bir lezzet.",
      price: 33.99,
      stock_quantity: 21,
      origin: "Gana",
      roast_level: "Orta-Koyu",
      flavor_notes: ["Çikolata", "Kahve", "Karamel"],
    }),
    await Coffee.create({
      _id: 19,
      title: "Exotic Espresso",
      category_id: 2,
      description: "Espresso sevenler için egzotik bir seçenek.",
      price: 35.99,
      stock_quantity: 19,
      origin: "Endonezya",
      roast_level: "Koyu",
      flavor_notes: ["Çikolata", "Baharatlı", "Vanilya"],
    }),
    await Coffee.create({
      _id: 20,
      title: "Tropikal Rüya",
      category_id: 2,
      description: "Tropikal meyve notalarıyla dolu bir rüya.",
      price: 37.99,
      stock_quantity: 17,
      origin: "Kosta Rika",
      roast_level: "Orta",
      flavor_notes: ["Mango", "Ananas", "Kokos"],
    });


      /* Category *
  const Category = require("../models/category");
  await Category.deleteMany(); // !!! Clear collection.
  await Category.create({
    _id: 2,
    title: "Kahve",
  });

  console.log("* Synchronized.");
}
