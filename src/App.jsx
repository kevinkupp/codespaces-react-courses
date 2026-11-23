
import React from 'react';
import Header from './components/Header';
import PageHeading from './components/PageHeading';
import CategoryList from './components/CategoryList';
import CourseList from './components/CourseList';
import Footer from './components/Footer';
import { FavoritesProvider, useFavorites } from './contexts/FavoritesContext';
import './index.css';

const courses = [
  {
    id: 1,
    category: "PROGRAMMEERIMINE",
    title: "Veebiarenduse alused",
    description: "Õpi looma veebilehti HTML-i, CSS-i ja JavaScriptiga.",
    duration: "24 tundi",
    isPopular: true
  },
  {
    id: 2,
    category: "ANDMEANALÜÜS",
    title: "Andmete analüüs Pythoniga",
    description: "Andmete töötlemine ja lihtsam visualiseerimine.",
    duration: "30 tundi",
    isPopular: true
  },
  {
    id: 3,
    category: "DISAIN",
    title: "Kasutajaliidese kujundamine",
    description: "Hea kasutajaliidese põhimõtted ja lihtsad prototüübid.",
    duration: "18 tundi",
    isPopular: true
  },
  {
    id: 4,
    category: "PROGRAMMEERIMINE",
    title: "Reacti sissejuhatus",
    description: "Komponendid ja nende kasutamine veebirakenduses.",
    duration: "20 tundi",
    isPopular: false
  },
  {
    id: 5,
    category: "ANDMEANALÜÜS",
    title: "Andmete visualiseerimine",
    description: "Graafikute ja diagrammide loomine andmetest.",
    duration: "16 tundi",
    isPopular: false
  },
  {
    id: 6,
    category: "DISAIN",
    title: "Veebilehe kujunduse alused",
    description: "Värvid, tüpograafia ja lehe paigutus.",
    duration: "12 tundi",
    isPopular: false
  }
];

const categories = ["Programmeerimine", "Andmeanalüüs", "Disain"];

function App() {
  return (
    <FavoritesProvider>
      <AppContent />
    </FavoritesProvider>
  );
}

function AppContent() {
  const { favoriteIds } = useFavorites();
  const [searchText, setSearchText] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('');
  const [showFavoritesOnly, setShowFavoritesOnly] = React.useState(false);
  const popularCourses = courses.filter(course => course.isPopular);
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLocaleLowerCase('et')
      .includes(searchText.trim().toLocaleLowerCase('et'));
    const matchesCategory =
      selectedCategory === '' || course.category === selectedCategory;
    const matchesFavorites =
      !showFavoritesOnly || favoriteIds.includes(course.id);

    return matchesSearch && matchesCategory && matchesFavorites;
  });
  const showPopularCourses =
    searchText.trim() === '' && selectedCategory === '' && !showFavoritesOnly;

  return (
    <div className="app-wrapper">
      <Header />
      
      <main className="container">
        <PageHeading />
        
        {showPopularCourses && (
          <section className="section-block">
            <h2>Populaarsed koolitused</h2>
            <CourseList courses={popularCourses} />
          </section>
        )}

        {/* Tavapärane kataloog */}
        <section className="section-block">
          <h2>Kõik koolitused</h2>
          <label className="course-search">
            <span>Otsi kursuse nime järgi</span>
            <input
              type="search"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              placeholder="Sisesta kursuse nimi"
            />
          </label>
          <CategoryList
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <button
            className={`category-btn favorites-filter${showFavoritesOnly ? ' active' : ''}`}
            type="button"
            aria-pressed={showFavoritesOnly}
            onClick={() => setShowFavoritesOnly((current) => !current)}
          >
            Ainult lemmikud
          </button>
          {filteredCourses.length > 0 ? (
            <CourseList courses={filteredCourses} />
          ) : (
            <p className="no-courses" role="status">
              Sobivaid kursusi ei leitud.
            </p>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;