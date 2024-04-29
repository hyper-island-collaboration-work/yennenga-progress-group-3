export default function ScrollButtons() {
  return (
    <>
      <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="/docs/images/carousel/carousel-1.svg"
          className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
          alt="..."
        />
      </div>
      <div className="relative bottom-40 flex justify-between">
        <div>
          <button
            type="button"
            className="group flex cursor-pointer items-center justify-center focus:outline-none"
            data-carousel-prev
          >
            <span className="dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black group-hover:bg-black/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white">
              <svg
                className="dark:text-gray-800 h-4 w-4 text-white rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
        </div>
        <div>
          <button
            type="button"
            className="group flex cursor-pointer items-center justify-center focus:outline-none"
            data-carousel-next
          >
            <span className="dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black group-hover:bg-black/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white">
              <svg
                className="dark:text-gray-800 h-4 w-4 text-white rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
