import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, date, textarea, ...props },
  ref
) {
  const style =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-b-4  focus:border-bg-stone-800 focus:bg-stone-200";

  return (
    <>
      <p className="flex flex-col gap-1 my-4">
        <label
          {...props}
          className="text-sm font-bold uppercase text-stone-500"
        >
          {label}
        </label>
        {textarea ? (
          <textarea ref={ref} className={style} {...props}></textarea>
        ) : (
          <input
            ref={ref}
            className={style}
            {...props}
            type={date ? "date" : "text"}
          />
        )}
      </p>
    </>
  );
});
export default Input;
