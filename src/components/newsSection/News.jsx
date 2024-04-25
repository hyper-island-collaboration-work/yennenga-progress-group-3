export default function News({ news, image }) {

  return (
    <div className="flex w-[300px] flex-col">
      <img
        loading="lazy"
        src={news.fields.newsImage.fields.file.url}
        alt={news.fields.newsTitle}
        className="h-[200px] rounded-t-2xl object-cover"
      ></img>
      <div className="h-16 rounded-b-2xl bg-white px-4 pb-2 pt-3 text-center">
        {post.fields.newsTitle}
      </div>
    </div>
  );
}

/*
      <p className={styles.event__date}>
        <span>
          {new Date(start_date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
          })}
        </span>
      </p>

      */
