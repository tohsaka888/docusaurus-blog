import React, { useState } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import Background from "@site/components/Background";
import DownIcon from "@site/components/HomePage/DownIcon";
import { PageContext } from "@site/components/Context/PageContext";
import FirstPage from "@site/components/Spring/FirstPage";
import SecondPage from "@site/components/Spring/SecondPage";
import Resume from "@site/components/resume";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner} style={{ marginBottom: "0px" }}>
      <div>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/React/vantajs"
          >
            开始探索
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [page, setPage] = useState<number>(0);
  return (
    <PageContext.Provider value={{ page, setPage }}>
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />"
      >
        <Background>
          <FirstPage>
            <HomepageHeader />
          </FirstPage>
          <SecondPage>
            <Resume />
          </SecondPage>
          <DownIcon />
        </Background>
      </Layout>
    </PageContext.Provider>
  );
}
