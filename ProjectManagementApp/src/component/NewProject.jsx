import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ cancleProjectSave, saveNewProject }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();
  function saveProjectDetails() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    saveNewProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }
  function cancleProject() {
    cancleProjectSave();
  }
  return (
    <>
      <Modal ref={modal} butnCaption="Close">
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-400 mb-4">
          Oops.... looks like you forget to enter a value
        </p>
        <p></p>
      </Modal>
      <div className="w-[35rem] m1-16">
        <menu className="flex item-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={cancleProject}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancle
            </button>
          </li>
          <li>
            <button
              onClick={saveProjectDetails}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input ref={dueDate} label="Due Date" date/>
        </div>
      </div>
    </>
  );
}
