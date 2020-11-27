import Link from "next/link";
import Layout from "../components/layout/layout";
import styles from "../styles/index.module.scss";

const Index = () => {
  return (
    <>
      <Layout>
        <article className={styles.index}>
          <section className={styles.presentation}>
            <div>
              <p>
                <h1>One Place.</h1>
                <h2>All Your Dreams.</h2>
              </p>
              <p>
                <strong>Veritas Game Launcher</strong> is an UWP application
                that lets you to integrate all your PC games from supported
                digital stores in just one place. Powered by IGDB and written in
                C# available exclusively for Windows 10.
              </p>
            </div>
            <caption>Your new way of gaming.</caption>
          </section>
          <section className={`${styles.features} ${styles.features_right}`}>
            <picture>
              <source
                srcSet="/static/png/feature-1-theme-dark.png"
                media="(prefers-color-scheme: dark)"
              />
              <img src="/static/png/feature-1-theme-light.png" />
            </picture>
            <div>
              <h1>Access all your PC games quickly</h1>
              <p>
                Have installed some games in your PC, but you don't want to
                launch the store client or find where it is installed? We can do
                it for you.
              </p>
            </div>
          </section>
          <section className={`${styles.features} ${styles.features_left}`}>
            <picture>
              <source
                srcSet="/static/png/feature-2-theme-dark.png"
                media="(prefers-color-scheme: dark)"
              />
              <img src="/static/png/feature-2-theme-light.png" />
            </picture>
            <div>
              <h1>Rule them all!</h1>
              <p>
                View and manage your entire collection of PC games from
                supported digital stores. Do commands like install, launch and
                even uninstall any games in just a click. Awesome, right?
              </p>
            </div>
          </section>
          <section className={`${styles.features} ${styles.features_right}`}>
            <picture>
              <source
                srcSet="/static/png/feature-3-theme-dark.png"
                media="(prefers-color-scheme: dark)"
              />
              <img src="/static/png/feature-3-theme-light.png" />
            </picture>
            <div>
              <h1>
                <span>Powered by&nbsp;</span>
                <Link href="">
                  <a>IGDB</a>
                </Link>
              </h1>
              <p>
                Our application use the Internet Games Database API to provide
                you the best experience. Once a game is added, we connect with
                their services to download informations about the game like the
                description, release date, screenshots, artworks and even
                videos. Those informations help us to give to you the must
                cleaner, beautiful and rich collection.
              </p>
              <Link href="https://api-docs.igdb.com/#about">
                <a target="_blank">Learn more ›</a>
              </Link>
            </div>
          </section>
          <section className={`${styles.features} ${styles.features_left}`}>
            <picture>
              <source
                srcSet="/static/png/feature-4-theme-dark.png"
                media="(prefers-color-scheme: dark)"
              />
              <img src="/static/png/feature-4-theme-light.png" />
            </picture>
            <div>
              <h1>Start gaming in seconds</h1>
              <p>
                Did you know that Windows 10 have a gaming overlay called&nbsp;
                <Link href="https://support.xbox.com/en-US/help/games-apps/game-setup-and-play/get-to-know-game-bar-on-windows-10/">
                  <a>Xbox Game Bar</a>
                </Link>
                ? Now, imagine your collection whenever you want. Yeah, that's
                it. <strong>Veritas Game Launcher</strong> have your own widget!
                Windows Key + G = MORE GAMING ❤❤❤
              </p>
              <Link href="https://docs.microsoft.com/en-us/gaming/game-bar/">
                <a target="_blank">Learn more ›</a>
              </Link>
            </div>
          </section>
          <section className={styles.conclusion}>
            <Link href="https://www.microsoft.com/store/r/9N16CCVC2WP9">
              <button>
                <a>Free download</a>
              </button>
            </Link>
          </section>
        </article>
      </Layout>
    </>
  );
};

export default Index;
