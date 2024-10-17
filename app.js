//// Berilgan mahsulotlarni narx yoki sotuv soni bo'yicha tartiblash.
// //Kirish: Mahsulotlar ro'yxatidagi obyektlarni tanlang va foydalanuvchi
// //belgilagan tartib bo'yicha saralang (asc yoki desc ).

// const products = [
//   { name: "Laptop", price: 1000, sales: 150 },
//   { name: "Phone", price: 500, sales: 300 },
//   { name: "Watch", price: 200, sales: 100 },
// ];

// // Narxi bo'yicha o'suvchi

// const sortProductsPriceAsc = products.sort((a, b) => a.price - b.price);
// console.log("Narxi bo'yicha o'suvchi(Ascending):", sortProductsPriceAsc);

// // Narxi bo'yicha kamayuvchi

// const sortProductsPriceDesc = products.sort((a, b) => b.price - a.price);
// console.log("Narxi bo'yicha kamayuvchi(Descendings):", sortProductsPriceDesc);

// // Sotuv bo'yicha o'suvchi

// const sortProductsSalesAsc = products.sort((a, b) => a.sales - b.sales);
// console.log("Sotuv bo'yicha o'suvchi(Ascending):", sortProductsSalesAsc);

// // Sotuv bo'yicha kamayuvchi

// const sortProductsSalesDesc = products.sort((a, b) => b.sales - a.sales);
// console.log("Sotuv bo'yicha kamayuvchi(Ascending):", sortProductsSalesDesc);

//// 2-masala
//// Vazifa: Talabalarning baholarini hisoblang va o'rtacha bahosi 70 dan past
//// bo'lganlarni ro'yxatlang.

// const students = [
//   { name: "Akmal", grades: [85, 90, 80] },
//   { name: "Salim", grades: [60, 70, 65] },
//   { name: "Nozim", grades: [50, 40, 55] },
// ];

// function calculateAverage(student) {
//   const evg =
//     student.grades.reduce((sum, grade) => sum + grade, 0) /
//     student.grades.length;

//   return {
//     name: student.name,
//     average: evg,
//     ispassed: evg > 70,
//   };
// }

// const results = students.map(calculateAverage);
// console.log(results);

////3-masala
///// Vazifa: Mahsulotlarning narxi va miqdoriga qarab, har bir mahsulotning umumiy summasini hisoblang.

// const products = [
//   { name: "Laptop", price: 1000, quantity: 2 },
//   { name: "Phone", price: 500, quantity: 3 },
//   { name: "Shoes", price: 100, quantity: 4 },
// ];
// function calculateSum(products) {
//   const sumAll = products.price * products.quantity;
//   return {
//     name: products.name,
//     sum: sumAll,
//   };
// }
// const results = products.map(calculateSum);
// console.log(results);

////4-masala
////Vazifa: Mahsulotlarning narxi, miqdori va soliqlariga qarab umumiy narxni hisoblang.

// const products = [
//   { name: "Laptop", price: 1000, quantity: 2, tax: 100 },
//   { name: "Phone", price: 500, quantity: 3, tax: 50 },
//   { name: "Shoes", price: 100, quantity: 4, tax: 10 },
// ];
// function calculateSum(products) {
//   const sumAll = products.price * products.quantity - products.tax;
//   return {
//     name: products.name,
//     sum: sumAll,
//   };
// }
// const results = products.map(calculateSum);
// console.log(results);

//// 5-masala
////Vazifa: Har bir muallifning yozgan kitoblarini ro'yxatlang va har bir muallifni faqat bir marta ko'rsating.

// const books = [
//   { title: "Book A", author: "Author A" },
//   { title: "Book B", author: "Author A" },
//   { title: "Book C", author: "Author B" },
//   { title: "Book D", author: "Author C" },
// ];

// function groupBooksByAuthor(books) {
//   return books.reduce((acc, book) => {
//     const existingAuthor = acc.find((item) => item.author === book.author);

//     if (existingAuthor) {
//       existingAuthor.books.push(book.title);
//     } else {
//       acc.push({ author: book.author, books: [book.title] });
//     }

//     return acc;
//   }, []);
// }

// const results = groupBooksByAuthor(books);
// console.log(results);

////6-masala
////Vazifa: Tadbirlarning sanalarini eski yoki yangi sanalar bo'yicha saralang.

// const dates = [
//   { event: "Event A", date: new Date("2023-10-01") },
//   { event: "Event B", date: new Date("2022-12-15") },
//   { event: "Event C", date: new Date("2024-01-10") },
// ];
// const sanalar = dates.sort((a, b) => a.date - b.date);
// console.log(sanalar);

////7-masala
////Vazifa: Berilgan mahsulotlarning o'rtacha narxini hisoblang.

// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 },
//   { name: "Shoes", price: 100 },
// ];

// function calculateAveragePrice(products) {
//   const total = products.reduce((sum, product) => sum + product.price, 0);
//   const average = total / products.length;

//   return average;
// }

// const result = calculateAveragePrice(products);
// console.log(result);

////8-masala
////Vazifa: Kitoblarni chop etilgan yil bo'yicha tartiblang (ko'tarilish yoki tushish tartibida).

// const books = [
//   { title: "Book A", year: 2001 },
//   { title: "Book B", year: 1995 },
//   { title: "Book C", year: 2010 },
//   { title: "Book D", year: 2020 },
// ];
// function sortByYear(books) {
//   return books.sort((a, b) => a.year - b.year);
// }

// console.log(sortByYear(books));

////9-masala
////Vazifa: Berilgan mahsulotlar ro'yxatidagi barcha mahsulotlarni sotildi deb belgilang.

// 9-MISOL. Berilgan mahsulotlar ro'yxatidagi barcha mahsulotlarni sotildi deb
// belgilang.

// const products = [
//   { name: "Laptop", price: 1000, sold: false },
//   { name: "Phone", price: 500, sold: false },
//   { name: "Shoes", price: 100, sold: false },
// ];
// products.map(allSold);

// function allSold(product) {
//   product.sold = true;
// }
// console.log(products);

////10-masala
////Vazifa: Berilgan mahsulotlarning jami miqdorini hisoblang.
// const products = [
//   { name: "Laptop", price: 1000, quantity: 2 },
//   { name: "Phone", price: 500, quantity: 3 },
//   { name: "Shoes", price: 100, quantity: 4 },
// ];

// function totalValue(products) {
//   products.forEach((product) => {
//     const total = product.price * product.quantity;
//     console.log(`${product.name}: ${total}`);
//   });
// }

// totalValue(products);

////11-masala
////Vazifa: Bir xil nomdagi mahsulotlarni birlashtirib, ularning miqdorini jamlang.

// const products = [
//   { name: "Laptop", quantity: 2 },
//   { name: "Phone", quantity: 3 },
//   { name: "Laptop", quantity: 1 },
//   { name: "Shoes", quantity: 4 },
// ];

// function combineProducts(products) {
//   return products.reduce((acc, curvall) => {
//     const found = acc.find((item) => item.name === curvall.name);
//     if (found) {
//       found.quantity += curvall.quantity;
//     } else {
//       acc.push({ name: curvall.name, quantity: curvall.quantity });
//     }
//     return acc;
//   }, []);
// }

// const combinedProducts = combineProducts(products);
// console.log(combinedProducts);

//// 12-masala
///// 12 - MISOL.Mahsulotlarni toifalar bo 'yicha guruhlang.
// const products = [
//   { name: "Laptop", category: "Electronics" },
//   { name: "Phone", category: "Electronics" },
//   { name: "Shoes", category: "Fashion" },
// ];
// const byName = products.map((nom) => nom.name);
// const byCategory = products.map((sorted) => sorted.category);
// console.log("Nomlari bo'yicha:", byName);
// console.log("Kategoriyalari bo'yicha:", byCategory);
