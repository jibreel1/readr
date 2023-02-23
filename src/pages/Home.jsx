import Hero from "../components/Hero";
import Features from "../components/Features";
import BookQuotes from "../components/BookQuotes";
import Books from "../components/Books";
import Subscribe from "../components/Subscribe";

const Home = ({ books, loading }) => {
   return (
      <div>
         <Hero />
         <Features />
         <BookQuotes />
         <Books books={books} isLoading={loading} />
         <Subscribe />
      </div>
   );
};

export default Home;
