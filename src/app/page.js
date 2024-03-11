const getProduct = async () => {
  console.log("getProduct");
  try {
    const res = await fetch("http://localhost:3000/api/product", {
      method: "GET",
      next: {
        revalidate: 1,
      },
    });
    const data = await res.json();
    console.log("getProduct", data);
    // return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

export default function Home() {
  const fetchData = async () => {
    const data = await getProduct();
    //console.log("Data:", data); // Вивід результату запиту на консоль
  };

  fetchData(); // Виклик функції для отримання даних

  return <main>hi</main>;
}
