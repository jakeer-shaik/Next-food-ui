import Categories from "@/components/categories/Categories";
import Hero from "@/components/herosection/Hero";


async function fetchData(url){
  const res = await fetch(url)
  return res.json()
}
export default async function Home() {
  const [categories]=await Promise.all([
    fetchData("https://www.themealdb.com/api/json/v1/1/categories.php")
  ])
  return (
    <main className="">
      <Hero />
      <Categories categories={categories.categories} />
    </main>
  );
}

