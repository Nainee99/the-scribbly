"use client";
export const dynamic = "force-dynamic";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Plus, ImageIcon, Link, Video, X, Loader2 } from "lucide-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import styles from "./writePage.module.css";
import Image from "next/image";

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();
  const fileInputRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [media, setMedia] = useState("");
  const [mediaPreview, setMediaPreview] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [categories, setCategories] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    fetchCategories();
    // Safe to use document here
    document.title = "Write";
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/categories");
      if (res.ok) {
        const data = await res.json();
        setCategories(data);
      }
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  if (status === "loading") {
    return (
      <div className={styles["loading-container"]}>
        <Loader2 className={styles["loading-spinner"]} />
        <p>Loading...</p>
      </div>
    );
  }

  if (status === "unauthenticated") {
    router.push("/");
    return null;
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleFileSelect = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      setMediaPreview(e.target?.result);
    };
    reader.readAsDataURL(file);

    uploadToCloudinary(file);
  };

  const uploadToCloudinary = async (file) => {
    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`
        );
      }

      const data = await response.json();

      if (data.url) {
        setMedia(data.url);
        console.log("Upload successful:", data.url);
      } else {
        throw new Error("No URL returned from upload");
      }
    } catch (error) {
      console.error("Upload failed:", error);
      alert(`Failed to upload image: ${error.message}`);
      setMediaPreview("");
    } finally {
      setIsUploading(false);
    }
  };

  const removeImage = () => {
    setMedia("");
    setMediaPreview("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async () => {
    if (!title.trim()) {
      alert("Please enter a title");
      return;
    }

    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style",
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <div className={styles["write-container"]}>
      <div className={styles["write-header"]}>
        <div className={styles["header-left"]}>
          <h1 className={styles["write-title"]}>Write your story</h1>
        </div>
        <div className={styles["header-right"]}>
          <button
            className={styles["category-button"]}
            onClick={() => setShowCategories(!showCategories)}
          >
            {catSlug
              ? categories.find((cat) => cat.slug === catSlug)?.title ||
                "Select Category"
              : "Select Category"}
          </button>
          <button className={styles["publish-button"]} onClick={handleSubmit}>
            Publish
          </button>
        </div>
      </div>

      {showCategories && (
        <div className={styles["categories-dropdown"]}>
          <div className={styles["categories-grid"]}>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`${styles["category-tag"]} ${
                  catSlug === category.slug ? styles["selected"] : ""
                }`}
                onClick={() => {
                  setCatSlug(category.slug);
                  setShowCategories(false);
                }}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className={styles["write-content"]}>
        <input
          type="text"
          placeholder="Title"
          className={styles["title-input"]}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className={styles["editor-container"]}>
          <div className={styles["editor-toolbar"]}>
            <button
              className={styles["toolbar-button"]}
              onClick={() => setOpen(!open)}
              title="Add media"
            >
              <Plus size={20} />
            </button>

            {open && (
              <div className={styles["media-options"]}>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  style={{ display: "none" }}
                />
                <button
                  className={styles["media-button"]}
                  onClick={() => fileInputRef.current?.click()}
                  title="Upload image"
                >
                  <ImageIcon size={16} />
                </button>
                <button className={styles["media-button"]} title="Add link">
                  <Link size={16} />
                </button>
                <button className={styles["media-button"]} title="Add video">
                  <Video size={16} />
                </button>
              </div>
            )}
          </div>

          {(mediaPreview || media) && (
            <div className={styles["image-preview"]}>
              <div className={styles["preview-container"]}>
                <Image
                  src={mediaPreview || media}
                  alt="Preview"
                  className={styles["preview-image"]}
                />
                {isUploading && (
                  <div className={styles["upload-overlay"]}>
                    <Loader2 className={styles["upload-spinner"]} />
                    <p>Uploading...</p>
                  </div>
                )}
                <button
                  className={styles["remove-image"]}
                  onClick={removeImage}
                  title="Remove image"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          )}

          <ReactQuill
            className={styles["text-editor"]}
            theme="bubble"
            value={value}
            onChange={setValue}
            placeholder="Tell your story..."
          />
        </div>
      </div>
    </div>
  );
};

export default WritePage;
