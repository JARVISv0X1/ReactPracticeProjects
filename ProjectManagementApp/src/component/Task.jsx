import NewTask from "./NewTask";

export default function Task() {
  return (
    <>
      <section>
        <h2 className="text-2xl text-bold mb-4 text-stone-400">Tasks</h2>
        <NewTask></NewTask>

        <p className="text-stone-400 mb-4">
          This Project does not have any task
        </p>
        <ul></ul>
      </section>
    </>
  );
}
