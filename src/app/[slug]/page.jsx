import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

// Commented out actual API call
// const getData = async (slug) => {
//   const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

const SinglePage = async ({ params }) => {
  const { slug } = params;

  // Dummy post data for testing UI
  const data = {
    title: "Exploring the Art of Storytelling",
    desc: `<p>Storytelling is an essential part of human culture and communication. Whether written, spoken, or visual, stories shape how we understand the world. In this post, we explore the fundamentals of narrative structure and how to craft compelling content that resonates with your audience.</p>
           <p>Discover how characters, conflict, and resolution come together to form a meaningful journey. From ancient myths to modern blogs, storytelling remains a powerful tool for engagement and inspiration.</p>`,
    img: "/sample-post.jpg",
    user: {
      name: "Jane Doe",
      image: "/avatar1.jpg",
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image
                  src={data.user.image}
                  alt=""
                  fill
                  className={styles.avatar}
                />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}>06.08.2025</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imageContainer}>
            <Image src={data.img} alt="" fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
