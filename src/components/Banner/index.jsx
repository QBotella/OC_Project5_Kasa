function Banner({ home, page }) {
  return (
    <div className={page === "about" ? "banner__about" : "banner"}>
      <h1>
        {home && (
          <h1>
            Chez vous, <br /> partout et ailleurs
          </h1>
        )}
      </h1>
    </div>
  )
}

export default Banner
