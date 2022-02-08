import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import Background from "@site/components/Background";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/React/vantajs">
            开始探索
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Background>
        <HomepageHeader />
      </Background>
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
