 import React, { useState, useEffect } from "react";

const App = () => {
  const [noteHeading, setNoteHeading] = useState("");
  const [noteDetails, setNoteDetails] = useState("");
  const [notes, setNotes] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (noteDetails === "" && noteHeading === "") return;

    setNotes((prev) => [
      {
        id: Date.now(),
        noteHeading,
        noteDetails,
      },
      ...prev,
    ]);

    setNoteHeading("");
    setNoteDetails("");
  };

  const deleteHandelar = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };


   useEffect( () => {
    const notes = JSON.parse(localStorage.getItem("notes"))
    
    if(notes && notes.length > 0){
      setNotes(notes)
    }
   },[])

   useEffect(() => {
      localStorage.setItem("notes", JSON.stringify(notes))
   }, [notes])

  return (
    <div className="h-screen overflow-hidden bg-[#080b12] text-white">
      {/* Background decoration */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 bg-[#080b12]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <div>
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
              <span className="text-violet-400">Code</span>Note
            </h1>

            <p className="mt-0.5 text-xs text-gray-500">
              Capture your thoughts.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden text-xs text-gray-500 sm:block">
              Your personal workspace
            </span>

            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-violet-500/20 bg-violet-500/10 text-lg font-semibold text-violet-400">
              N
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 mx-auto grid h-[calc(100vh-80px)] max-w-7xl gap-8 overflow-hidden px-6 py-6 lg:grid-cols-2 lg:px-10 lg:py-8">

        {/* ================= FORM ================= */}
        <section className="flex min-h-0 flex-col justify-center">
          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-300">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              Create a new note
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What's on your mind?
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
              Capture ideas, reminders and thoughts before they disappear.
            </p>

            <form
              className="mt-8 flex flex-col gap-5"
              onSubmit={submitHandler}
            >
              {/* Heading */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Note heading
                </label>

                <input
                  value={noteHeading}
                  onChange={(e) => setNoteHeading(e.target.value)}
                  type="text"
                  placeholder="Give your note a title..."
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white placeholder:text-gray-600 outline-none transition duration-200 focus:border-violet-500/50 focus:bg-black/30 focus:ring-4 focus:ring-violet-500/10"
                />
              </div>

              {/* Details */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Details
                </label>

                <textarea
                  value={noteDetails}
                  onChange={(e) => setNoteDetails(e.target.value)}
                  placeholder="Write your thoughts here..."
                  className="h-36 w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm leading-6 text-white placeholder:text-gray-600 outline-none transition duration-200 focus:border-violet-500/50 focus:bg-black/30 focus:ring-4 focus:ring-violet-500/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group mt-1 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition duration-200 hover:bg-violet-500 hover:shadow-violet-500/30 active:scale-[0.98]"
              >
                <span className="text-xl leading-none transition-transform duration-200 group-hover:rotate-90">
                  +
                </span>

                Add Note
              </button>
            </form>
          </div>
        </section>

        {/* ================= NOTES ================= */}
        <section className="flex min-h-0 min-w-0 flex-col lg:border-l lg:border-white/10 lg:pl-8">

          {/* Header */}
          <div className="mb-6 flex shrink-0 items-end justify-between">
            <div>
              <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-violet-400">
                Your collection
              </p>

              <h2 className="text-3xl font-bold tracking-tight">
                Your Notes
              </h2>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-gray-400">
              <span className="font-semibold text-white">
                {notes.length}
              </span>{" "}
              {notes.length === 1 ? "note" : "notes"}
            </div>
          </div>

          {/* Cards */}
          <div className="notes-scroll min-h-0 flex-1 overflow-y-auto pr-2">
            {notes.length === 0 ? (
              /* Empty state */
              <div className="flex h-full min-h-72 flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/[0.015] px-6 text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-3xl">
                  📝
                </div>

                <h3 className="text-lg font-semibold text-gray-200">
                  No notes yet
                </h3>

                <p className="mt-2 max-w-xs text-sm leading-6 text-gray-600">
                  Create your first note and it will appear here.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                {notes.map((note) => {
                  return (
                    <div
                      key={note.id}
                      className="group relative flex min-h-56 flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/[0.08] via-white/[0.035] to-white/[0.015] p-5 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-950/20"
                    >
                      {/* Decorative corner */}
                      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-violet-500/10 blur-2xl transition duration-300 group-hover:bg-violet-500/20" />

                      <div className="relative">
                        {/* Note label */}
                        <div className="mb-4 flex items-center justify-between">
                          <span className="rounded-lg border border-violet-400/10 bg-violet-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-violet-300">
                            Note
                          </span>

                          <span className="text-xs text-gray-700">
                            #{String(note.id).slice(-4)}
                          </span>
                        </div>

                        {/* Heading */}
                        <h3 className="line-clamp-2 text-lg font-bold leading-tight text-white">
                          {note.noteHeading}
                        </h3>

                        {/* Details */}
                        <p className="mt-3 line-clamp-4 text-sm leading-6 text-gray-500">
                          {note.noteDetails}
                        </p>
                      </div>

                      {/* Bottom */}
                      <div className="relative mt-6 flex items-center justify-between gap-3 border-t border-white/5 pt-4">
                        <span className="text-[11px] text-gray-600">
                          Saved just now
                        </span>

                        <button
                          onClick={() => deleteHandelar(note.id)}
                          className="cursor-pointer rounded-lg border border-red-500/10 bg-red-500/5 px-3 py-1.5 text-xs font-medium text-red-400 opacity-70 transition duration-200 hover:border-red-500/20 hover:bg-red-500/10 hover:text-red-300 hover:opacity-100 active:scale-95"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })}

              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;