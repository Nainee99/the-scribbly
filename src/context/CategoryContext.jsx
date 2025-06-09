"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const CategoryContext = createContext();
const CATEGORY_CACHE_KEY = "categories";
const CATEGORY_CACHE_TIME_KEY = "categories_cache_time";
const CATEGORY_CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const useCategory = () => useContext(CategoryContext);

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem(CATEGORY_CACHE_KEY);
    const cacheTime = localStorage.getItem(CATEGORY_CACHE_TIME_KEY);

    if (
      stored &&
      cacheTime &&
      Date.now() - Number(cacheTime) <= CATEGORY_CACHE_DURATION
    ) {
      setCategories(JSON.parse(stored));
    } else {
      // Remove expired cache
      localStorage.removeItem(CATEGORY_CACHE_KEY);
      localStorage.removeItem(CATEGORY_CACHE_TIME_KEY);

      // Fetch from API if not in localStorage or cache expired
      fetch(process.env.NEXT_PUBLIC_CATEGORIES_API_URL)
        .then((res) => res.json())
        .then((data) => {
          setCategories(data);
          localStorage.setItem(CATEGORY_CACHE_KEY, JSON.stringify(data));
          localStorage.setItem(CATEGORY_CACHE_TIME_KEY, Date.now().toString());
        })
        .catch(() => setCategories([]));
    }
  }, []);

  return (
    <CategoryContext.Provider value={categories}>
      {children}
    </CategoryContext.Provider>
  );
};
