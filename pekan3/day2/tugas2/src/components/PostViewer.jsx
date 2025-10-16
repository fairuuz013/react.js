import useFetch from "../hook/useFetch";

export default function PostViewer() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  if (loading) return <p>Loading data...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Post dari api</h2>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  );
}
