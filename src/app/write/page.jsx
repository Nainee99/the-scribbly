import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/components/editor/Editor"), {
  ssr: false,
});

export default function WritePage() {
  return <Editor />;
}
