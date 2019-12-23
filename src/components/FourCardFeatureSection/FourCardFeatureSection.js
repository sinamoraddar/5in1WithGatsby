import React from "react"
import Card from "./Card/Card"
import teamBuilderImage from "../../images/FourCardFeatureSection/images/icon-team-builder.svg"
import calculatorImage from "../../images/FourCardFeatureSection/images/icon-calculator.svg"
import karmaImage from "../../images/FourCardFeatureSection/images/icon-karma.svg"
import supervisorImage from "../../images/FourCardFeatureSection/images/icon-supervisor.svg"
import styles from "./FourCardFeatureSection.module.scss"

const FourCardFeatureSection = () => (
  <div className={styles.fourCardFeatureSection}>
    <div className={styles.header}>
      <h1>
        Reliable,efficient delivery <br /> <span>Powered by Technology</span>
      </h1>
      Our Artificial Intelligence powered tools use millions of project data
      points to ensure that you project is successful
    </div>
    <div className={styles.cardContainer}>
      <Card
        color="cyan"
        image={supervisorImage}
        title="Supervisor"
        description="Monitors activity to identify project roadblocks"
      />
      <div className={styles.column}>
        <Card
          color="red"
          image={teamBuilderImage}
          title="Team Builder"
          description="Scans our talent network to create the optimal team for your project"
        />

        <Card
          color="orange"
          image={karmaImage}
          title="Karma"
          description="Regularly evaluates our talent to ensure quality"
        />
      </div>
      <Card
        color="blue"
        image={calculatorImage}
        title="Calculator"
        description="Uses data from past projects to provide better delivery estimates"
      />
    </div>
  </div>
)

export default FourCardFeatureSection
