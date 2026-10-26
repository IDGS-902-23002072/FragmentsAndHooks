import { use, useEffect, useState } from "react";

const API_URL = "https://rickandmortyapi.com/api/character";

export function useCharacters(page) {
  const [character, setCharacter] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    async function loadCharacters() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        setCharacter(data.results);
        setTotalPages(data.info.pages);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadCharacters();
    return () => controller.abort();
  }, [page]);

  return { character, totalPages, loading, error };
}

export function useCharacter(id) {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    async function loadCharacters() {
      try {
        const response = await fetch(`${API_URL}/id`);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadCharacters();
    return () => controller.abort();
  }, [page]);

  return { character, loading, error };
}
