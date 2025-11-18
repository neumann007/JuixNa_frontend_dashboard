const Pagination = () => {
  return (
    <div className="p-4 flex items-center justify-center gap-3 text-gray-500">
      <button
        disabled
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Prev
      </button>
      <div className="flex justify-start gap-1">
        <button className="px-2 border rounded-sm bg-foeBlueLight">1</button>
        <button className="px-2 border rounded-sm hover:bg-foePurple">2</button>
        <button className="px-2 border rounded-sm hover:bg-foePurple">3</button>
        <button className="px-2 border rounded-sm hover:bg-foePurple">4</button>
        <button className="px-2 border rounded-sm hover:bg-foePurple">5</button>
        ........
        <button className="px-2 border rounded-sm hover:bg-foePurple">
          10
        </button>
      </div>
      <button className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-foePurple">
        Next
      </button>
    </div>
  );
};

export default Pagination;
