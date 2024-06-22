import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CardList from "../components/CardList";
import Header from "../components/Header";
import Loading from "../components/Loading";
import useFetchRecipes from "../hooks/useFetchRecipes";
export default function HomePage() {
  const [fetchRecipes, { recipe, loading, error }] = useFetchRecipes();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    fetchRecipes(searchParams.get("search"));
  }, []);
  function handleSearch(searchTerm) {
    if (searchTerm) {
      fetchRecipes(searchTerm);
    }
  }
  return (
    <div className="App">
      <main className="main_container">
        <Header handleSearch={handleSearch} />
        {recipe && <CardList recipes={recipe} />}
        {loading && <Loading />}
        {error && <p>Some kind of error occured!</p>}
      </main>
    </div>
  );
}
