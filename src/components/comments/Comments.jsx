"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useState } from "react";

// Dummy data for UI testing
const dummyComments = [
  {
    _id: "1",
    desc: "This post was super helpful! Thanks for sharing.",
    createdAt: "2025-06-05",
    user: {
      name: "Alice Johnson",
      image: "/avatar1.jpg",
    },
  },
  {
    _id: "2",
    desc: "Great insights. Looking forward to more posts like this!",
    createdAt: "2025-06-06",
    user: {
      name: "Mark Smith",
      image: "/avatar2.jpg",
    },
  },
];

const Comments = ({ postSlug }) => {
  const { status } = useSession();
  const [desc, setDesc] = useState("");

  // const { data, mutate, isLoading } = useSWR(
  //   `http://localhost:3000/api/comments?postSlug=${postSlug}`,
  //   fetcher
  // );

  // const handleSubmit = async () => {
  //   await fetch("/api/comments", {
  //     method: "POST",
  //     body: JSON.stringify({ desc, postSlug }),
  //   });
  //   mutate();
  // };

  const handleSubmit = () => {
    alert("Comment submitted (mocked).");
    setDesc("");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>

      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write a comment..."
            className={styles.input}
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}

      <div className={styles.comments}>
        {/* Replace `data` with `dummyComments` */}
        {dummyComments.map((item) => (
          <div className={styles.comment} key={item._id}>
            <div className={styles.user}>
              {item.user.image && (
                <Image
                  src={item.user.image}
                  alt={item.user.name}
                  width={50}
                  height={50}
                  className={styles.image}
                />
              )}
              <div className={styles.userInfo}>
                <span className={styles.username}>{item.user.name}</span>
                <span className={styles.date}>{item.createdAt}</span>
              </div>
            </div>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
// Note: The above code uses dummy data for UI testing purposes.
// In a real application, you would replace `dummyComments` with the data fetched from your API.
// The `handleSubmit` function is also mocked to show an alert instead of making a real API call.
