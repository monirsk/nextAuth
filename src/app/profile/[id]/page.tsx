export default function UserProfile({ params }: any) {
  return (
    <>
      <h1>Profile page</h1>
      <p>Profile of id no : {params.id}</p>
    </>
  );
}
