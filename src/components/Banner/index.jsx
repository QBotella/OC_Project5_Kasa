function Banner({ home, page }) {
  return (
    <div className={page === "about" ? "banner__about" : "banner"}>
      <h1>
        {home && (
          <p>
            Chez vous, <br /> partout et ailleurs
          </p>
        )}
      </h1>
    </div>
  )
}

export default Banner
