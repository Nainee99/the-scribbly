"use client";
import React, { createContext, useContext, useState, useCallback } from "react";

const PostContext = createContext();

export const usePost = () => useContext(PostContext);

const CACHE_KEY = "posts_cache";
const CACHE_TIME_KEY = "posts_cache_time";
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Helper function for fetch with retry
const fetchWithRetry = async (url, options = {}, retries = 3, delay = 1000) => {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const res = await fetch(url, options);
      if (res.ok) return res;
      // If not ok, throw to trigger retry
      throw new Error(`Fetch failed with status ${res.status}`);
    } catch (err) {
      if (attempt === retries - 1) throw err;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
};

export const PostProvider = ({ children }) => {
  const [postsData, setPostsData] = useState({ posts: [], count: 0 });
  const [loading, setLoading] = useState(false);

  const fetchPosts = useCallback(async (page, cat) => {
    setLoading(true);

    if (typeof window !== "undefined") {
      const cacheKey = cat ? `${cat}_${page}` : `all_${page}`;
      let postsByPage = {};

      try {
        const cacheTime = localStorage.getItem(CACHE_TIME_KEY);
        if (cacheTime && Date.now() - Number(cacheTime) <= CACHE_DURATION) {
          postsByPage = JSON.parse(localStorage.getItem(CACHE_KEY)) || {};
        } else {
          localStorage.removeItem(CACHE_KEY);
          localStorage.removeItem(CACHE_TIME_KEY);
        }
      } catch (e) {
        postsByPage = {};
        console.error("Cache parse error", e);
      }

      if (postsByPage[cacheKey]) {
        setPostsData(postsByPage[cacheKey]);
        setLoading(false);
        return;
      }

      try {
        const url = `/api/posts?page=${page}&cat=${cat || ""}`;
        const res = await fetchWithRetry(url, { cache: "no-store" }, 3, 1000);
        const data = await res.json();
        setPostsData(data);

        // Save to cache
        postsByPage[cacheKey] = data;
        localStorage.setItem(CACHE_KEY, JSON.stringify(postsByPage));
        localStorage.setItem(CACHE_TIME_KEY, Date.now().toString());
      } catch (e) {
        setPostsData({ posts: [], count: 0 });
        console.error("Fetch error", e);
      }
      setLoading(false);
    }
  }, []);

  return (
    <PostContext.Provider value={{ ...postsData, fetchPosts, loading }}>
      {children}
    </PostContext.Provider>
  );
};
