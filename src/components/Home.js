import React from "react";

function Home() {
  return (
    <div className="home-root">
      <header className="hero">

        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-dark">C</span>
            <span className="accent">o'o</span>
            <span className="title-dark">x Travel</span></h1>

          <p className="hero-sub">"Planea hoy, viaja mañana".</p>

        </div>
      </header>

      <section className="cards-row">
        {/* ... (El resto de tus tarjetas permanece igual) ... */}
        <div className="card card-img">
          <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=60" alt="Mérida"/>
          <span className="card-caption">Mérida, Yucatan</span>
          <div className="card-frame">Frame</div>
          <button className="card-btn">Me Interesa</button>
        </div>

        <div className="card card-solid color-1">
          <div className="card-frame">Frame</div>
          <button className="card-btn">Me Interesa</button>
        </div>

        <div className="card card-solid color-2">
          <div className="card-frame">Frame</div>
          <button className="card-btn">Me Interesa</button>
        </div>

        <div className="card card-solid color-3">
          <div className="card-frame">Frame</div>
          <button className="card-btn">Me Interesa</button>
        </div>
      </section>
    </div>
  );
}

export default Home;